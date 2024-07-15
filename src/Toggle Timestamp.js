function toggleTimestamp() {
  var spreadsheet = SpreadsheetApp.getActive();
  var buttonRange = spreadsheet.getRangeByName("Toggletimestamp");
  var buttonValue = buttonRange.getValues();  

  if(buttonValue == "ON"){
    //turn timestamp off

    buttonRange.setValue("OFF");
  }
  else if(buttonValue == "OFF"){
    //turn timestamp on

    buttonRange.setValue("ON");    
  }
  else{
    //Default: if timestamp is not set to on or off, set to on

    buttonRange.setValue("ON");    
  }  
}

function timestampButton() {
  var spreadsheet = SpreadsheetApp.getActive();
  var buttonValue =  spreadsheet.getRangeByName("ToggleTimestamp").getValue();

  return (buttonValue);
}
