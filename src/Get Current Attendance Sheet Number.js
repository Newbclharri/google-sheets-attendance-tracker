  /** gets the sheet position of the most current attendance sheet in the workbook
   * returns number
  */
  
function getMostCurrentAttendanceSheetNum() {

  ss = SpreadsheetApp.getActive();
  sheets = ss.getSheets();

  //search for the sheet whose tab name has the most current date (greatest date value)
  var maxValue = 0;
  for(n = 0; n <= sheets.length - 1; n++){    
    var sheetName = sheets[n].getName();
    var sheetNameValue = new Date(sheetName).valueOf(); //attendance sheets are named by date

    //the most current sheet date will have the greatest date value
    if(sheetNameValue > maxValue){
      maxValue = sheetNameValue;
      var position = n; //sheet number with greatest date value
    }    
  }
  //Logger.log(position);
  return (position);    
}

function testFunction(){
  Logger.log(getMostCurrentAttendanceSheetNum());

}