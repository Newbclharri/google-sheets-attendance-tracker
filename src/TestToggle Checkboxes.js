function toggleCheckboxes() {
  var ss = SpreadsheetApp.getActive();
  var columnToCount = SpreadsheetApp.getActive().getRange("B3:B");
  var valueCheckAll = ss.getRange("A3:A3").getValues(); //check box value to check or uncheck all checkboxes
  var checkboxRange = ss.getRange("A4:A");
  var values = checkboxRange.getValues();
  var numRows = countColumn(columnToCount.getValues());
  var numCols = checkboxRange.getNumColumns();
  Logger.log(valueCheckAll[0][0]);

  if(valueCheckAll[0][0] == true){
    Logger.log("conditional works");
    for(var i = 0; i < numRows - 1; i++) {
      for(var j = 0; j < numCols; j++) {
        values[i][j] = true;
      }
    }
  }
  
      
  checkboxRange.setValues(values);
}

function countColumn(values){
  // counts from end of array until data is read to return the last row of data in a column

  SpreadsheetApp.getActive();
  
  var data  = values;  

  for(var i = data.length-1; i >= 0; i--){ 
    //data is read from last position data.length to the first position where i = 0

    if(data[i][0] != null && data[i][0] != ""){
      return(i+1) //returns the last column row.
    }  
  }
}