# Brand Identity Questionnaire

A static bilingual (Arabic/English) questionnaire. Answers go to a Google Sheet through a Google Apps Script web app.

- `index.html`: the page and its logic. Put the web-app URL in `SUBMIT_URL`.
- `questions.js`: every question, its Arabic and English text, and the branching rules (`showIf`).
- `apps-script/Code.gs`: receives submissions and appends one row per response.

## Connect the Google Sheet (one time)

1. Create a new Google Sheet, for example "Brand questionnaire responses".
2. Open Extensions > Apps Script. Delete the sample code, then paste in the contents of `apps-script/Code.gs`. Save.
3. Optional: choose `testInsert` and press Run. Google asks you to approve access to your sheets. A "Responses" tab with one TEST row should appear. Delete that row afterwards.
4. Go to Deploy > New deployment > Select type: Web app. Set:
   - Execute as: Me
   - Who has access: Anyone
5. Press Deploy. Copy the Web app URL; it ends in `/exec`.
6. Paste the URL into `SUBMIT_URL` in `index.html`.

Each answer becomes a column, named by its question id in `questions.js`. Columns are added automatically the first time an answer arrives.

## Run locally

```
python3 -m http.server 4331
```
