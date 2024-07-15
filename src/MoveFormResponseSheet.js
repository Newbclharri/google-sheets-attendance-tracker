function moveFormResponseSheet() {

  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.setActiveSheet(spreadsheet.getSheets()[0]);
  var sheet1Col1Header = spreadsheet.getRange("A3:A3").getValues()[0][0]; //Form Responses 1st Column is a timestamp   

  if(sheet1Col1Header === "Timestamp"){
    Logger.log(sheet1Col1Header); //check to make sure the cell with Timestamp header is present

    SpreadsheetApp.setActiveSheet(spreadsheet.getSheets()[0]); //make first sheet active sheet
    spreadsheet.moveActiveSheet(2);  
  } 
  
}
