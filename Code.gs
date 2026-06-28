/**
 * Google Apps Script backend for the Photographer Workflow Survey.
 *
 * Stores each submission as a row in a Google Sheet and serves all
 * responses back to the dashboard as JSON.
 *
 * SETUP: see ../README.md. In short:
 *   1. sheets.new  -> create a blank Google Sheet.
 *   2. Extensions > Apps Script, delete the default code, paste THIS file.
 *   3. Deploy > New deployment > Web app:
 *        Execute as: Me
 *        Who has access: Anyone
 *   4. Copy the /exec URL into survey/config.js
 */

var SHEET_NAME = 'responses';

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(['submittedAt', 'answersJson']);
  }
  return sh;
}

// Form posts here (Content-Type: text/plain to avoid CORS preflight).
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);
  try {
    var body = JSON.parse(e.postData.contents);
    var submittedAt = body.submittedAt || new Date().toISOString();
    var answers = body.answers || {};
    getSheet_().appendRow([submittedAt, JSON.stringify(answers)]);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// Dashboard fetches here.
function doGet() {
  var sh = getSheet_();
  var values = sh.getDataRange().getValues();
  var out = [];
  for (var i = 1; i < values.length; i++) {
    var ts = values[i][0];
    var raw = values[i][1];
    if (!raw) continue;
    var answers;
    try { answers = JSON.parse(raw); } catch (e) { answers = {}; }
    out.push({ submittedAt: ts, answers: answers });
  }
  return json_({ ok: true, count: out.length, responses: out });
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
