function isHoliday(){
  /**
   * @return {Boolean} 
   */   
  
  var timeZone = SpreadsheetApp.getActive().getSpreadsheetTimeZone();
  var date = Utilities.formatDate(new Date(),timeZone,"MM-dd-yy");
  var dateValue = new Date(date).valueOf();
  var year = new Date().getFullYear();

  //Holiday Breaks
  var laborDay = new Date("09/06/" + year).valueOf();
  var thanksgivingBreakStart = new Date("11/22/" + year).valueOf();
  var thanksgivingBreakEnd = new Date("11/26/" + year).valueOf();
  var winterBreakStart = new Date("12/20/" + year).valueOf();
  var endOfDec = new Date("12/31/" + year).valueOf();
  var winterBreakEnd = new Date("01/03/" + year).valueOf();
  var mlkHoliday = new Date ("01/17/" + year).valueOf();
  var presDay = new Date ("02/21/" + year).valueOf();
  var springBreakStart = new Date("03/14/" + year).valueOf();
  var springBreakEnd = new Date("03/18/" + year).valueOf();

                                                                                    //Accounts for var year change
  if((dateValue >= thanksgivingBreakStart && dateValue <= thanksgivingBreakEnd) || ((dateValue >= winterBreakStart && dateValue <= endOfDec) || dateValue <= winterBreakEnd) || (dateValue >= springBreakStart && dateValue <= springBreakEnd) || (dateValue === laborDay || dateValue === mlkHoliday || dateValue === presDay)){    
  //isHoliday() returns true if the passed date parameter is in a holiday range or falls on the same date as a one day holiday
    return(true);
  }
  else{
    return(false);

  }
}
