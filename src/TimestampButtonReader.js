function timestampButtonValue() {
  var spreadsheet = SpreadsheetApp.getActive();
  var buttonValue =  spreadsheet.getRangeByName("ToggleTimestamp").getValue();

  return (buttonValue);
}

