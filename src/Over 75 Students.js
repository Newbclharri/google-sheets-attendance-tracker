function moveToWaitList() {
  var spreadsheet = SpreadsheetApp.getActive();

  //registration sheet information to move to waitlist sheet
  var regSheet = spreadsheet.getSheetByName("Registration");
  var regSheetRange = regSheet.getDataRange();
  var regSheetData = regSheetRange.getValues();
  var regSheetLastRow = regSheet.getLastRow();
  var waitListCount = 79 //row 78 contains the 76th student data on registration sheet
  Logger.log(regSheetData[waitListCount-1]);

  //waitlist sheet information
  var waitListSheet = spreadsheet.getSheetByName("Waitlist");
  var waitListRange = waitListSheet.getDataRange();
  var waitListData = waitListRange.getValues();

  
  var rowWaitList = 3;
  if(regSheetLastRow >= waitListCount){
    Logger.log("Last row = " + regSheetLastRow + ": over 75 students");

    for(rowRegSheet = waitListCount-1; rowRegSheet < regSheetLastRow; rowRegSheet++){
      waitListData[rowWaitList] = regSheetData[rowRegSheet];
      rowWaitList++;

      }
    }
  else{
    if(regSheetLastRow < waitListCount){
      var waitListRange = waitListSheet.getRange("A4:Z").clearContent();
    }
  }  
}
