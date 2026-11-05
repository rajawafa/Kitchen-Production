// Paste this into a Google Apps Script project that is bound to your Google Sheet.
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Rekod') || SpreadsheetApp.getActiveSpreadsheet().insertSheet('Rekod');
  if (sheet.getLastRow() === 0) sheet.appendRow(['Tarikh', 'Flavour', 'Jumlah', 'Masa direkod']);
  const data = JSON.parse(e.postData.contents);
  sheet.appendRow([data.date, data.flavour, Number(data.amount), data.createdAt]);
  return ContentService.createTextOutput(JSON.stringify({ok:true})).setMimeType(ContentService.MimeType.JSON);
}
