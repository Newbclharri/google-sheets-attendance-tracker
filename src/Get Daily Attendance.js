function getDailAttendance() {
  var ss = SpreadsheetApp.getActive();
  var sheets = ss.getSheets();
  ss.setActiveSheet(sheets[0]);

  
  //target sheet to receive total # of students present each day
  var targetSheet = ss.getSheetByName("Daily Totals");
  var headerRow = 3; //header row: values are the dates when attendance was taken
  var col = 1
  var numRows = 2
  var numCols = targetSheet.getLastColumn();

  //header row values will be used to match attendace tab to place the day's attendance in the appropriate cell
  var headerRange = targetSheet.getRange(headerRow,col,numRows,numCols);
  var headerData = headerRange.getValues();

  //after correct column is found using the dates in the header row, place # of students present in target range
  var targetRow = 4
  var targetRange = targetSheet.getRange(targetRow,col,numRows,numCols);
  var targetData = targetRange.getValues();

  var row = 0; //first row of the array
  for(i = 0; i <= sheets.length - 1; i++){
    var tabDate = sheets[i].getName();

    for(j = 0; j <= numCols; j++){      
      var timezone  = ss.getSpreadsheetTimeZone();
      var headerDate = headerData[row][j];
      var formatedHeaderDate = Utilities.formatDate(new Date(headerDate),timezone,"MM/dd/yyyy");

      //if attendance sheet matches the date in the header, place # of students in the row below.
      if(tabDate == formatedHeaderDate){        
        var attendanceSheet = ss.getSheetByName(tabDate);
        //ss.setActiveSheet(attendanceSheet);
        var sourceRange = attendanceSheet.getRange("K2:K2");
        var sourceData = sourceRange.getValues();
        targetData[row][j] = sourceData;
      }
    }    
  }
  targetRange.setValues(targetData);
}
