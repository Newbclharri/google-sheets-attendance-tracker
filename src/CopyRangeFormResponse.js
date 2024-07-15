function copyRangeFromResponseForm() {
  var ss = SpreadsheetApp.getActive();
  SpreadsheetApp.setActiveSheet(ss.getSheets()[0]); //make first sheet active sheet
  var sheet1 = ss.getSheets()[0]; // Form Responses will automatically be first sheet
  var sheet1Col1Header = sheet1.getRange("A3:A3").getValues()[0][0]; //Form Responses 1st Column is a timestamp
  var sheet2 = ss.getSheets()[1]; // second sheet is the fist day attendance tab 

  //range from sheet to move to sheet2
  var formSheetHeaderLength = ss.getRangeByName("HeaderFormSheet").getValues().length;
  var lastRow = sheet1.getLastRow() - formSheetHeaderLength;
  var sourceRange = ss.getRangeByName("RosterToCopy");  
  var sourceValues = sourceRange.getValues();
  //var columnCount = sourceValues[0].length();

  //sheet2 range to copy to
  var targetRange = sheet2.getRange("B4:E");
  var targetValues = targetRange.getValues();

  Logger.log(sheet1Col1Header);
  //Logger.log(sourceValues[0][2]);
  //Logger.log(sheet1Col1Header);  

  if(sheet1Col1Header === "Timestamp"){
    for(i = 0; i < lastRow; i++){  
      innerArrayLength = sourceValues[i].length;    
      for(j = 0; j < innerArrayLength; j++){
        targetValues[i][j] = sourceValues[i][j];
        
      }
    }
  }
  targetRange.setValues(targetValues);
}
