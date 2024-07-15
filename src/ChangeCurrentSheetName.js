function changeSheetDate(e){
  var spreadsheet = e.source.getActiveSheet();
  var row = e.range.getRow();
  var headerRow = 1;
  var colStart = SpreadsheetApp.getActive().getRangeByName("ChangeDate").getValues()[0].length;
  var activeSheet = SpreadsheetApp.getActive();
  var checkSheetData = activeSheet.getActiveSheet().getRange("A2:A2").getValues(); //should contain string "Total Students:" 
  //var checkDateCell = activeSheet.getRange("C2:C1").getValues();

  //Debug
  //Logger.log(checkSheetData[0][0]);
  
  //Logger.log(checkDateCell[0][0]); 
  
  
  if(checkSheetData[0][0] == "Total Students:"){
    //condition checks to see if an attendance sheet is active. An attendance sheet will have "Total Students:" at this position

    if(e.range.rowStart <= headerRow && e.range.columnStart === colStart && e.value != null){
      
      var newSheetName = spreadsheet.getRange(row,colStart).getValues();
      var timeZone = SpreadsheetApp.getActive().getSpreadsheetTimeZone();
      var newSheetNameFormat = Utilities.formatDate(new Date(newSheetName), timeZone, "MM/dd/yyyy");
      var ss = SpreadsheetApp.getActive();
      ss.renameActiveSheet(newSheetNameFormat);
    
    }
  }
}

