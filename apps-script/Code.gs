// Google Apps Script: receives questionnaire answers (one row per response) and uploaded
// brand files (saved to Drive, one folder per response).
// Paste into the Sheet's Extensions > Apps Script, then Deploy > New deployment > Web app,
// Execute as: Me, Who has access: Anyone.
const SHEET_NAME = "Responses";
const UPLOAD_ROOT = "Brand questionnaire uploads";   // private Drive folder, created on first upload
const MAX_BYTES = 60000;           // an answers payload is ~5 KB
const MAX_KEYS = 120;
const MAX_LEN = 1500;
const MAX_FILE_BYTES = 10 * 1024 * 1024;   // 10 MB per file
const MAX_FILES = 20;              // per response
const ALLOWED_EXT = ["png", "jpg", "jpeg", "webp", "gif", "svg", "pdf", "ai", "eps", "psd", "ttf", "otf", "woff", "woff2"];
const ID_RE = /^BQ-[A-Z0-9-]{4,40}$/;

function doPost(e) {
  try {
    const raw = (e && e.postData && e.postData.contents) || "";
    if (raw.length > MAX_FILE_BYTES * 1.4 + 2000) return out({ ok: false, error: "too_large" });
    const body = JSON.parse(raw);
    if (body && body.kind === "file") return saveFile(body);
    if (raw.length > MAX_BYTES) return out({ ok: false, error: "too_large" });
    return saveAnswers(body);
  } catch (err) {
    return out({ ok: false, error: "server_error" });
  }
}

function saveAnswers(body) {
  const answers = body && typeof body.answers === "object" && body.answers ? body.answers : null;
  if (!answers || Object.keys(answers).length > MAX_KEYS) return out({ ok: false, error: "bad_payload" });

  const row = {
    submitted_at: new Date(),
    response_id: clean(body.id),
    language: clean(body.lang),
    form_version: clean(body.version),
  };
  for (const [k, v] of Object.entries(answers)) {
    if (!/^[a-z0-9_]{1,40}$/.test(k)) continue;           // only known-shape keys
    row[k] = clean(Array.isArray(v) ? v.join(", ") : v);
  }
  if (ID_RE.test(String(body.id))) {
    const folder = findFolder(String(body.id));
    if (folder) row.uploads_folder = folder.getUrl();
  }

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    let headers = sh.getLastColumn() ? sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0] : [];
    const missing = Object.keys(row).filter(k => !headers.includes(k));
    if (missing.length) {
      headers = headers.concat(missing);
      sh.getRange(1, 1, 1, headers.length).setValues([headers]).setFontWeight("bold");
      sh.setFrozenRows(1);
    }
    sh.appendRow(headers.map(h => (h in row ? row[h] : "")));
  } finally {
    lock.releaseLock();
  }
  return out({ ok: true });
}

// Files stay private in the owner's Drive; nothing is shared or executed.
function saveFile(body) {
  const id = String(body.id || "");
  if (!ID_RE.test(id)) return out({ ok: false, error: "bad_id" });
  const name = String(body.name || "").replace(/[\\/:*?"<>|\u0000-\u001f]/g, "_").slice(0, 120);
  const ext = (name.split(".").pop() || "").toLowerCase();
  if (!name || ALLOWED_EXT.indexOf(ext) === -1) return out({ ok: false, error: "type_not_allowed" });
  const bytes = Utilities.base64Decode(String(body.data || ""));
  if (!bytes.length || bytes.length > MAX_FILE_BYTES) return out({ ok: false, error: "too_large" });

  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const folder = findFolder(id) || rootFolder().createFolder(id);
    let count = 0;
    const it = folder.getFiles();
    while (it.hasNext()) { it.next(); count++; }
    if (count >= MAX_FILES) return out({ ok: false, error: "too_many_files" });
    folder.createFile(Utilities.newBlob(bytes, "application/octet-stream", name));
  } finally {
    lock.releaseLock();
  }
  return out({ ok: true });
}

function rootFolder() {
  const props = PropertiesService.getScriptProperties();
  const saved = props.getProperty("UPLOAD_ROOT_ID");
  if (saved) {
    try { return DriveApp.getFolderById(saved); } catch (e) { /* deleted: recreate below */ }
  }
  const f = DriveApp.createFolder(UPLOAD_ROOT);
  props.setProperty("UPLOAD_ROOT_ID", f.getId());
  return f;
}

function findFolder(id) {
  const it = rootFolder().getFoldersByName(id);
  return it.hasNext() ? it.next() : null;
}

// Cap length and stop spreadsheet formula injection (=, +, -, @ at the start).
function clean(v) {
  if (v === null || v === undefined) return "";
  if (typeof v === "number") return v;
  let s = String(v).slice(0, MAX_LEN);
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}

function out(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

// Run once from the editor to grant Drive access and check the upload folder.
function testUpload() {
  const r = saveFile({ id: "BQ-SETUPTEST", name: "test.svg", data: Utilities.base64Encode('<svg xmlns="http://www.w3.org/2000/svg"/>') });
  Logger.log(r.getContent());
  const f = findFolder("BQ-SETUPTEST");
  Logger.log(f ? f.getUrl() : "no folder");
  if (f) f.setTrashed(true);   // remove the test folder again
}
