function timeIn(e){
  var spreadsheet = e.source.getActiveSheet();
  var row = e.range.getRow();
  var header = SpreadsheetApp.getActive().getRangeByName('HeaderRange').getValues().length;
  var colStart = SpreadsheetApp.getActive().getRangeByName('CheckBoxColumn').getValues()[0].length;
  var colToUpdate = SpreadsheetApp.getActive().getRangeByName("CheckIn").getValues()[0].length;  

  Logger.log(header);
  
  var time = Utilities.formatDate(new Date(),"CST", "hh:mm a");
   
  if(e.range.rowStart > header && e.range.columnStart === colStart && e.value === "TRUE")
  {
    spreadsheet.getRange(row,colToUpdate).setValue(time);
  }
  else if(e.range.rowStart > header && e.range.columnStart === colStart && e.value === "FALSE")
  {
    spreadsheet.getRange(row,colToUpdate).setValue(null);
  }
}