const SHEET_NAME = 'RSVP Responses';

function doPost(e) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
  const params = e.parameter || {};

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      'Timestamp',
      'Event Title',
      'Guest Name',
      'Attendance',
      'Message',
      'Page URL',
      'User Agent'
    ]);
  }

  sheet.appendRow([
    params.submittedAt || new Date().toISOString(),
    params.eventTitle || '',
    params.guestName || '',
    params.attendance || '',
    params.guestMessage || '',
    params.pageUrl || '',
    params.userAgent || ''
  ]);

  return HtmlService
    .createHtmlOutput('<html><body>ok</body></html>')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
