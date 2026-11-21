// Google Apps Script: receives questionnaire answers and appends one row per response.
// Paste into the Sheet's Extensions > Apps Script, then Deploy > New deployment > Web app,
// Execute as: Me, Who has access: Anyone.
const SHEET_NAME = "Responses";
const MAX_BYTES = 60000;   // a full response is ~5 KB
const MAX_KEYS = 120;
const MAX_LEN = 1500;

function doPost(e) {
  try {
    const raw = (e && e.postData && e.postData.contents) || "";
    if (raw.length > MAX_BYTES) return out({ ok: false, error: "too_large" });
    const body = JSON.parse(raw);
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
  } catch (err) {
    return out({ ok: false, error: "server_error" });
  }
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

// Run once from the editor to check the sheet setup (optional).
function testInsert() {
  const r = doPost({ postData: { contents: JSON.stringify({ id: "TEST", lang: "en", version: "test", answers: { respondent_name: "Test row", values: ["quality", "honesty"] } }) } });
  Logger.log(r.getContent());
}
