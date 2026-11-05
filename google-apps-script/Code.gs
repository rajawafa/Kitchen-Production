// Paste this into a Google Apps Script project that is bound to your Google Sheet.
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Rekod') || SpreadsheetApp.getActiveSpreadsheet().insertSheet('Rekod');
  if (sheet.getLastRow() === 0) sheet.appendRow(['Tarikh', 'Flavour', 'Pack', 'Loose (pcs)', 'Jumlah (pcs)', 'Masa direkod']);
  const data = JSON.parse(e.postData.contents);
  sheet.appendRow([data.date, data.flavour, Number(data.packs || 0), Number(data.loose || 0), Number(data.totalPcs || 0), data.createdAt]);
  return ContentService.createTextOutput(JSON.stringify({ok:true})).setMimeType(ContentService.MimeType.JSON);
}
