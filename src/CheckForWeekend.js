function isWeekend() {
    /**
   * @return {Boolean} 
   */    
   
  var timeZone = SpreadsheetApp.getActive().getSpreadsheetTimeZone();
  var date = Utilities.formatDate(new Date(),timeZone,"MM-dd-yy");
  var dayOfTheWeek = new Date(date).getDay(); // returns day of the week as a number 0 - 6 where Sun = 0 and Sat = 6

  var SUNDAY = 0.0;
  var SATURDAY = 6.0;  

  if(dayOfTheWeek === SATURDAY || dayOfTheWeek === SUNDAY){    

    return(true);
  }
  else{
    return(false);
  }
}
function test(){

  Logger.log(isWeekend());

}