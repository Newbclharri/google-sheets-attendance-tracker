function createAttendanceTab() {    
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet(); //get the current spreadsheet  
  var attendaceTemplate = spreadsheet.getSheetByName("Attendance Template");
 

  //Set date for current day's tab or next days tab
  var MILLIS_PER_DAY = 1000*60*60*24; // Total number of milliseconds in a day. Use for setting next day's tab  
  var timeZone = SpreadsheetApp.getActive().getSpreadsheetTimeZone();  
  var today = Utilities.formatDate(new Date(),timeZone,"MM/dd/yyyy");  
  var todayInMilliSecs = new Date(today).getTime();
  var mostCurrSheetDate = getMostCurrentSheetName();
  var mostCurrSheetDateInMilliSecs = new Date(mostCurrSheetDate).getTime();
 
  //_____________________________________________________________________________________________

    
  //Add the next day's tab to spreadsheet  
  spreadsheet.setActiveSheet(attendaceTemplate); 
  spreadsheet.duplicateActiveSheet();// Duplicates active sheet and becomes new active sheet

  if (mostCurrSheetDateInMilliSecs >= todayInMilliSecs){
    var date = new Date(mostCurrSheetDate); //converts String to Date data type

    nextDay = Utilities.formatDate(new Date (date.getTime() + MILLIS_PER_DAY),timeZone, "MM/dd/yyyy");
        
    spreadsheet.renameActiveSheet(nextDay);
  } else {
    spreadsheet.renameActiveSheet(today);    
  }
  spreadsheet.moveActiveSheet(4);

  //Prepare new sheet to take attendance (clear specific sheet ranges)
    var sheetToPrepare = spreadsheet.getSheetByName(today);
  
  sheetToPrepare.getRange("F4:I").clearContent(); //Clear all data for a new usuable attendance sheet
  sheetToPrepare.getRange("A4:A").clearContent();//Clear check marks in column A
  sheetToPrepare.getRange("B4:E").clearContent();//Clear student data
  sheetToPrepare.getRange("C1:C1").clearContent(); //date change cell

  //Populate Attendance with Students in ascending order (Max 75 Students):
  addStudents();   
}