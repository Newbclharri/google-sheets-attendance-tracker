function myFunction() {
  // var sheet = SpreadsheetApp.getActiveSheet();
  // var sheetName = sheet.getSheetName()

  const mostCurrSheet = getMostCurrentSheetName();
  console.log(mostCurrSheet)

  console.log(new Date(mostCurrSheet).getTime() >= new Date("05/29/2024").getTime())
}
