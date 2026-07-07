/**
 * Code Aquarium — Free Consultancy booking sink.
 *
 * Deploy this bound to the target Google Sheet as a Web App so the
 * /free-consultancy page can append each booking as a new row.
 *
 * Sheet: https://docs.google.com/spreadsheets/d/1qm7Avga6wpM_lvqMI3xiCS4rK-wjSk8tuwhiN-Chw_o/edit
 *
 * Setup: see SETUP.md in this folder.
 */

// Name of the tab rows are written to. Created automatically if missing.
var SHEET_NAME = 'Bookings';

// Column order — the header row is written once, on first run.
var HEADERS = [
  'Submitted At',
  'Name',
  'Email',
  'Phone',
  'Company',
  'Service',
  'Message',
  'Date',
  'Date (ISO)',
  'Time',
  'Time (24h)',
  'Timezone',
  'Event',
  'Duration',
];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(30000); // serialize concurrent submissions

  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = getSheet_();

    sheet.appendRow([
      data.submittedAt || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.company || '',
      data.service || '',
      data.message || '',
      data.date || '',
      data.dateISO || '',
      data.time || '',
      data.time24 || '',
      data.timezone || '',
      data.event || '',
      data.duration || '',
    ]);

    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// Lets you sanity-check the deployment in a browser (GET the /exec URL).
function doGet() {
  return json_({ ok: true, service: 'code-aquarium-bookings' });
}

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
