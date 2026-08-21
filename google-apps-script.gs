/*
RR SUCCESS POINT — FREE CENTRAL ADMIN DATABASE
1. Create a Google Sheet named "RR Success Point Enrollments".
2. Extensions -> Apps Script.
3. Delete the default code and paste this entire file.
4. Save.
5. Deploy -> New deployment -> Web app.
6. Execute as: Me.
7. Who has access: Anyone.
8. Deploy and copy the Web app URL.
9. Paste that URL into script.js:
   adminWebAppUrl: "YOUR_WEB_APP_URL"
10. Re-upload/publish the website.

Every enrollment will then be appended to the Google Sheet.
*/
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    new Date(),
    data.id || "",
    data.student || "",
    data.parent || "",
    data.phone || "",
    data.school || "",
    data.className || "",
    data.subject || "",
    data.address || ""
  ]);
  return ContentService.createTextOutput("OK");
}
function setupHeaders(){
  var sheet=SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  sheet.getRange(1,1,1,9).setValues([["Date","Application ID","Student","Father/Mother","Mobile","School","Class","Subject","Address"]]);
}
