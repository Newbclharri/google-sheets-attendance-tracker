function onEdit(e){

  //change the sheet date on range edit
  changeSheetDate(e);

  //Only timestamp the appropriate columns if the active sheet is an attendance sheet:

  var spreadsheet = SpreadsheetApp.getActive();
  var activeSheet = spreadsheet.getActiveSheet();
  var range = activeSheet.getRange("A1:A1");
  var value = range.getValue();

  if(timestampButtonValue() == "ON" && value == "Attendance"){
    //check in time and checkout time are recorded when user edits target range
    timeIn(e);   
    timeOut(e);
  } 
}