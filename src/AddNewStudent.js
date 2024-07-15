/**
 * Add student from Registration tab to Attendance tab and sort in alpha order by last name
 * var CAPACITY = Max 75 students unless otherwise specified
 * USE var registrationSheetLastRow to transfer all student from registration tab to attendance tab
 * Includes use of other functions:
 * countColumn() --> counts from bottom of array to first non null cell value to return last column position
 */
function addStudents() {

  var CAPACITY = 75;

  var spreadsheet = SpreadsheetApp.getActive();
  //Latest attendance tab
  var attendanceSheet = spreadsheet.getActiveSheet(); 
  var targetRange = attendanceSheet.getRange("B3:E"); 
  var targetData = targetRange.getValues();
  //var valueTotalStudents = attendanceSheet.getRange("B2:B2").getValues(); //Use this variable if cap is beyond 75
  var lastColRow = countColumn(attendanceSheet.getRange("B3:B").getValues());  //There are 3 header rows.  This is why range starts at row 3 (B3)
  

  //Registration Tab: Contains source data to add to the target sheet (attendance sheet)  
  var registrationSheet = spreadsheet.getSheetByName("Registration");

  //var registrationSheetLastRow = registrationSheet.getLastRow(); //Use as for loop terminal condition to transfer all student data from Registratio tab to Attendance tab

  var sourceRange = registrationSheet.getRange("B3:E");
  var sourceData = sourceRange.getValues();  
  //Logger.log(targetData[3]); //Debug
  //Logger.log(registrationSheetLastRow); //Debug
  
  //Transfer student data from registration tab (sourceData) to attendance tab (targetData)
  for(var i = lastColRow; i <= CAPACITY; i++ ){      
    for(var j = 0; j <= sourceData[0].length-1; j++){       
      targetData[i][j] = sourceData[i][j];
    }      
  }
  
  targetRange.setValues(targetData);

  //Alphabetically sort student data on the attendance sheet:
  var rangeToSort = attendanceSheet.getRange('A4:E');
  rangeToSort.sort({column: 2, ascending: true}); //sorts second column of active sheet in ascending order.
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
