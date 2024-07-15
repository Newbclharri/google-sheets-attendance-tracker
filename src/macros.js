function TimestampFormat() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('F4:G207').activate();
  spreadsheet.getActiveRangeList().setNumberFormat('h":"mm" "am/pm');
};