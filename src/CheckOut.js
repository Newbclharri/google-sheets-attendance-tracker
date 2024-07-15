function timeOut(e){
  
  var spreadsheet = e.source.getActiveSheet();

  var row = e.range.getRow(); //row the user has edited
  var headerRow = SpreadsheetApp.getActive().getRangeByName("HeaderRange").getValues().length; //only concerned with anything user edits below header row
  var colStart = SpreadsheetApp.getActiveSpreadsheet().getRangeByName('DepartureColumn').getValues()[0].length; //Column that contains Departure outcome values
  var colToUpdate = SpreadsheetApp.getActiveSpreadsheet().getRangeByName("CheckOut").getValues()[0].length; //Check out timestamp column to update if user edits a cell in Departure column

  var time = Utilities.formatDate(new Date(),"CST", "hh:mm a");
  
  if(e.range.rowStart > headerRow && e.range.columnStart === colStart && e.value != null && e.value != "Absent"){
  // add timestamp if user edits a cell in Departure column

  spreadsheet.getRange(row,colToUpdate).setValue(time);
  }
  else if(e.range.rowStart > headerRow && e.range.columnStart === colStart && (e.oldvalue == null || e.value === "Absent")){
  // checks to see if previous value was deleted and clears timestamp

  spreadsheet.getRange(row,colToUpdate).setValue(null);
  }

  
}
