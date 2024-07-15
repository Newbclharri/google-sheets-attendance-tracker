function sendDailyAttendance(){

  //SOURCE INFORMATION to send to sheet Attendance Totals in target doc
  //Site row identifier in target doc from source sheet "Daily Totals"
  var sourceSheet = SpreadsheetApp.getActive().getSheetByName("Daily Totals");
  var SOURCE_SITE = sourceSheet.getRange("A1:A1").getValues();
  var sourceLastCol = sourceSheet.getLastColumn();
  var sourceRange = sourceSheet.getRange(4,1,1,250);
  var sourceData = sourceRange.getValues();
  var sourceDateRow = 0;
 

  //destination
  var targetURL = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1j0JJOg81q5NrpQ6TRrGxdJ3oIL7sL5Ot3j_G2h93O_Y/edit#gid=969163462");
  var targetSheet = targetURL.getSheetByName("Attendance Totals");
  var siteNameCol = targetSheet.getRange("C:C").getValues();
  var targetLastRow = targetSheet.getDataRange().getLastRow();
  var targetLastCol = targetSheet.getLastColumn();

     //find the row for this site
  for(i = 0; i < targetLastRow; i++){
    if(SOURCE_SITE[0][0] == siteNameCol[i][0]){
      var targetRow = i+1;
      Logger.log(targetRow);
      break;
    }
  }  
  var targetRange = targetSheet.getRange(targetRow,6,1,250);
  var targetData = targetRange.getValues();
  var targetDateRow = 0;

//transfer data to destination
var targetRange = targetRange.setValues(sourceData);

}