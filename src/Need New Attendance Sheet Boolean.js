function needNewAttendanceSheet(){
  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getSheets();
  var numSheets = spreadsheet.getNumSheets();
  var timeZone = spreadsheet.getSpreadsheetTimeZone();
  var currentDate = Utilities.formatDate(new Date(), timeZone, "MM/dd/yyyy");
  var needNewSheet = true; 

  //loop through all sheets to find a tab equal to current Date
  //boolean needNewSheet set to false if the loop finds a tab with the currentDate.
  for(n = 0; n <= numSheets - 1; n++){
    var sheetName = sheet[n].getName();    
    if(sheetName == currentDate){
      //Logger.log(n); //debug
      needNewSheet = false;
    }
  }
  return needNewSheet;
}