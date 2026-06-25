/**
 * Raya Elite — Lead & Booking Log
 * Google Apps Script web app. Receives POSTs from the website's
 * /api/homepage, /api/contact, and /api/book routes and writes one row
 * to the matching tab.
 *
 * SETUP (one-time):
 *  1. Create a Google Sheet named "Raya Elite Lead & Booking Log".
 *  2. Extensions → Apps Script. Paste this whole file. Save.
 *  3. Run `setup` once (creates the 3 tabs, headers, and Status dropdowns).
 *     Approve the permission prompt.
 *  4. Deploy → New deployment → type "Web app".
 *       Execute as: Me   ·   Who has access: Anyone
 *     Copy the Web app URL.
 *  5. Put that URL in the site's GOOGLE_SHEETS_WEBHOOK_URL env var (Vercel).
 */

var STATUS_OPTIONS = ["New", "Contacted", "Quoted", "Confirmed", "Completed", "Lost"];

var TABS = {
  homepage: {
    name: "Homepage Inquiries",
    headers: [
      "Timestamp", "Full Name", "Email Address", "Phone Number",
      "Service Interest", "Space Notes", "Status", "Assigned To",
      "Follow-Up Date", "Admin Notes",
    ],
    statusCol: 7, // G
    fields: ["timestamp", "fullName", "email", "phone", "serviceInterest", "spaceNotes"],
  },
  contact: {
    name: "Contact Page Quote Requests",
    headers: [
      "Timestamp", "Full Name", "Email Address", "Phone Number", "Space Type",
      "Bedrooms", "Bathrooms", "Pets", "Sq Footage", "Restrooms", "Building Levels",
      "Space Description", "Clean Type", "Frequency", "When to Start", "Preferred Time",
      "Additional Notes", "Status", "Assigned To", "Follow-Up Date", "Quote Sent", "Admin Notes",
    ],
    statusCol: 18, // R
    fields: [
      "timestamp", "fullName", "email", "phone", "spaceType", "bedrooms", "bathrooms",
      "pets", "sqFootage", "restrooms", "buildingLevels", "spaceDescription", "cleanType",
      "frequency", "whenToStart", "preferredTime", "additionalNotes",
    ],
  },
  book: {
    name: "Booking Requests",
    headers: [
      "Timestamp", "Full Name", "Email Address", "Phone Number", "Space Type",
      "Bedrooms", "Bathrooms", "Pets", "Sq Footage", "Restrooms", "Building Levels",
      "Space Description", "Clean Type", "Frequency", "Preferred Start", "Preferred Time",
      "Access & Special Instructions", "Status", "Confirmed Date", "Confirmed Time",
      "Service Address", "Assigned Team", "Admin Notes",
    ],
    statusCol: 18, // R
    fields: [
      "timestamp", "fullName", "email", "phone", "spaceType", "bedrooms", "bathrooms",
      "pets", "sqFootage", "restrooms", "buildingLevels", "spaceDescription", "cleanType",
      "frequency", "preferredStart", "preferredTime", "accessInstructions",
    ],
  },
};

function setup() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  Object.keys(TABS).forEach(function (key) {
    var cfg = TABS[key];
    var sheet = ss.getSheetByName(cfg.name) || ss.insertSheet(cfg.name);
    sheet.clear();
    sheet.getRange(1, 1, 1, cfg.headers.length).setValues([cfg.headers]).setFontWeight("bold");
    sheet.setFrozenRows(1);
    // Status dropdown on the whole status column (rows 2..1000)
    var rule = SpreadsheetApp.newDataValidation().requireValueInList(STATUS_OPTIONS, true).build();
    sheet.getRange(2, cfg.statusCol, 999, 1).setDataValidation(rule);
  });
  // Remove the default "Sheet1" if empty
  var def = ss.getSheetByName("Sheet1");
  if (def && ss.getSheets().length > 1) ss.deleteSheet(def);
}

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var cfg = TABS[data.path];
    if (!cfg) return json({ ok: false, error: "Unknown path" });

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(cfg.name);
    if (!sheet) return json({ ok: false, error: "Tab not found — run setup()" });

    var row = cfg.fields.map(function (f) {
      return data[f] != null ? String(data[f]) : "";
    });
    row.push("New"); // Status column
    sheet.appendRow(row);
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
