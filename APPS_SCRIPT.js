// ─── Atelier Mayne — Contact Form → Google Sheet ─────────────────────────────
// Paste this entire file into Google Apps Script (Extensions → Apps Script)
// then deploy as a Web App (Execute as: Me, Access: Anyone)
// Copy the Web App URL into index.html → APPS_SCRIPT_URL
// ─────────────────────────────────────────────────────────────────────────────

const SHEET_ID    = '1_qkYkTsLQz2yP2xE8WAYYJjmprvyZfQjB4RTczu0l_M';
const NOTIFY_EMAIL = 'hello@ateliermayne.com';

function doPost(e) {
  try {
    const data   = JSON.parse(e.postData.contents);
    const sheet  = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();

    // Add header row if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Nature of Project', 'Message']);
      sheet.getRange(1, 1, 1, 6).setFontWeight('bold');
    }

    // Log enquiry
    sheet.appendRow([
      new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      data.name    || '',
      data.email   || '',
      data.phone   || '',
      data.project || '',
      data.message || '',
    ]);

    // Email notification
    const subject = `New Commission Enquiry — ${data.name}`;
    const body    = `
New enquiry received via ateliermayne.com

Name:    ${data.name}
Email:   ${data.email}
Phone:   ${data.phone || 'Not provided'}
Project: ${data.project || 'Not specified'}

Message:
${data.message}

---
Logged to Google Sheet: https://docs.google.com/spreadsheets/d/${SHEET_ID}
    `.trim();

    MailApp.sendEmail(NOTIFY_EMAIL, subject, body);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test this function manually in Apps Script to verify sheet access
function testSetup() {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
  Logger.log('Sheet name: ' + sheet.getName());
  Logger.log('Setup OK — sheet is accessible.');
}
