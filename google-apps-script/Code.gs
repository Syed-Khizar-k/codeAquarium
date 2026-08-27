/**
 * Code Aquarium — Free Consultancy booking sink & email notification.
 *
 * Deploy this bound to the target Google Sheet as a Web App so the
 * /free-consultancy page can append each booking as a new row and send
 * you an instant email reminder/notification.
 *
 * Setup: see SETUP.md in this folder.
 */

// Name of the tab rows are written to. Created automatically if missing.
var SHEET_NAME = 'Bookings';

// ── NOTIFICATION CONFIGURATION ──────────────────────────────────────────
// Put your email address here to receive an email notification for every booking.
var NOTIFICATION_EMAIL = 'abdulrehmanwahla01@gmail.com';

// Set to true to also send a confirmation email to the person who booked.
var SEND_CLIENT_CONFIRMATION = true;
// ────────────────────────────────────────────────────────────────────────

/**
 * 🧪 ONE-TIME PERMISSION AUTHORIZATION & TEST FUNCTION
 * In the Apps Script toolbar:
 * 1. Select "testSendEmail" in the dropdown.
 * 2. Click "Run" (▶️).
 * 3. Authorize permissions when prompted (Review permissions -> Advanced -> Go to ... -> Allow).
 */
function testSendEmail() {
  var targetEmail = (NOTIFICATION_EMAIL || Session.getEffectiveUser().getEmail()).trim();
  
  var sampleData = {
    submittedAt: new Date().toISOString(),
    name: 'Abdul Rehman (Test)',
    email: targetEmail,
    phone: '+92 300 1234567',
    company: 'Code Aquarium',
    service: 'ai-automation',
    message: 'Testing email notification delivery from Code Aquarium',
    date: 'Friday, August 28, 2026',
    dateISO: '2026-08-28',
    time: '11:00 AM',
    time24: '11:00',
    timezone: 'Asia/Karachi',
    event: 'Free Strategy Consultation',
    duration: '30 min',
  };

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var result = sendAdminNotification_(sampleData, ss.getUrl());
  Logger.log('Status: ' + result);
}

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
  'Email Status',
];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(30000); // serialize concurrent submissions

  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = getSheet_();
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    // 1. Send Admin Notification Email
    var emailStatus = sendAdminNotification_(data, ss.getUrl());

    // 2. Send Client Confirmation Email (Optional)
    if (SEND_CLIENT_CONFIRMATION && data.email) {
      sendClientConfirmation_(data);
    }

    // 3. Record Row in Google Sheet
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
      emailStatus,
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

function sendAdminNotification_(data, sheetUrl) {
  var targetEmail = NOTIFICATION_EMAIL.trim();
  if (!targetEmail) {
    try {
      targetEmail = Session.getEffectiveUser().getEmail();
    } catch (e) {
      targetEmail = '';
    }
  }

  if (!targetEmail) return 'No email configured';

  var subject = '🚀 New Consultation Booking: ' + (data.name || 'Client') + ' (' + (data.date || 'Upcoming') + ')';
  
  var body = [
    'You have received a new consultation booking on Code Aquarium!',
    '────────────────────────────────────────',
    'Client Name: ' + (data.name || 'N/A'),
    'Email: ' + (data.email || 'N/A'),
    'Phone: ' + (data.phone || 'N/A'),
    'Company: ' + (data.company || 'N/A'),
    'Service Interest: ' + (data.service || 'N/A'),
    'Date: ' + (data.date || 'N/A'),
    'Time: ' + (data.time || 'N/A') + ' (' + (data.timezone || 'N/A') + ')',
    'Event: ' + (data.event || 'Free Strategy Consultation') + ' (' + (data.duration || '30 min') + ')',
    'Client Message / Notes: ' + (data.message || 'None'),
    'Submitted At: ' + (data.submittedAt || new Date().toISOString()),
    '────────────────────────────────────────',
    'View Google Sheet: ' + sheetUrl,
  ].join('\n');

  try {
    GmailApp.sendEmail(targetEmail, subject, body);
    return 'Sent to ' + targetEmail;
  } catch (err1) {
    try {
      MailApp.sendEmail(targetEmail, subject, body);
      return 'Sent (via MailApp) to ' + targetEmail;
    } catch (err2) {
      console.error('Email error: ' + err2);
      return 'Error: ' + String(err2);
    }
  }
}

function sendClientConfirmation_(data) {
  if (!data.email) return;

  var subject = 'Confirmation: ' + (data.event || 'Free Strategy Consultation') + ' with Code Aquarium';
  
  var body = [
    'Hi ' + (data.name || 'there') + ',',
    '',
    'Thank you for booking a free strategy consultation with Code Aquarium!',
    '',
    'Here are your booking details:',
    '• Consultation: ' + (data.event || 'Free Strategy Consultation') + ' (' + (data.duration || '30 min') + ')',
    '• Date: ' + (data.date || 'N/A'),
    '• Time: ' + (data.time || 'N/A') + ' (' + (data.timezone || 'N/A') + ')',
    '• Format: Google Meet / Zoom',
    '',
    'Our team is reviewing your project details and will share the meeting invitation link before the call.',
    '',
    'Best regards,',
    'The Code Aquarium Team',
    'https://codeaquarium.com'
  ].join('\n');

  try {
    GmailApp.sendEmail(data.email, subject, body);
  } catch (err1) {
    try {
      MailApp.sendEmail(data.email, subject, body);
    } catch (err2) {
      console.error('Client email error: ' + err2);
    }
  }
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
