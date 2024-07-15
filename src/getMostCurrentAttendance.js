/**
 * returns the name of the most current attendance sheet in the Spreadsheet
 */
function getMostCurrentSheetName() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var mostCurrSheet= ss.getSheets()[getMostCurrentAttendanceSheetNum()];
  var mostCurrSheetName = mostCurrSheet.getSheetName();
  return mostCurrSheetName;   
}


