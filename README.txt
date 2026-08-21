RR SUCCESS POINT — FINAL ADMIN VERSION

WHAT IS INCLUDED
- Same approved banner design.
- All fee examples are ₹500.
- Online enrollment form.
- After submit, student stays on the website and WhatsApp opens in a separate tab/window with a pre-filled message to 7037939060. The student still has to tap SEND in WhatsApp because browsers do not allow a website to send WhatsApp messages silently.
- admin.html: local admin viewer + CSV export.
- google-apps-script.gs: optional FREE central admin database using Google Sheets.
- REAL UPI QR IS INCLUDED: assets/upi-qr.png. UPI ID: 7037939060@sbi.
- WhatsApp number is 7037939060.

IMPORTANT ABOUT YOUR QR
Your real QR image was not attached to this message/session, so the ZIP contains a placeholder only. When you upload the real QR image, replace assets/upi-qr.png with it, keeping the same filename. Do not share your UPI PIN/OTP.

HOW TO CHANGE FEES
Open index.html -> Ctrl+F -> search "₹500". Change the amount you want. Save Ctrl+S and refresh.

HOW TO USE LOCAL ADMIN
Open admin.html with Live Server. It shows applications saved on that same browser/device and can download CSV. This is NOT a central admin database.

HOW TO GET CENTRAL ADMIN (FREE)
1. Make a Google Sheet: "RR Success Point Enrollments".
2. Google Sheet -> Extensions -> Apps Script.
3. Paste google-apps-script.gs.
4. Save.
5. Deploy -> New deployment -> Web app.
6. Execute as: Me.
7. Who has access: Anyone.
8. Deploy and copy the Web App URL.
9. Open script.js in this website and find:
   adminWebAppUrl: ""
   Paste your Web App URL between the quotes.
10. Save and publish the website again.
Then every online enrollment can be added to your central Google Sheet.

FREE PUBLISHING WITH GITHUB PAGES
1. Create/login to GitHub.
2. Create a NEW PUBLIC repository, e.g. rr-success-point.
3. Upload everything inside this folder: index.html, style.css, script.js, admin.html, google-apps-script.gs and assets folder.
4. Repository -> Settings -> Pages.
5. Source: Deploy from a branch.
6. Branch: main; folder: /(root).
7. Save.
8. GitHub gives a free URL like:
   https://YOURUSERNAME.github.io/rr-success-point/

Do NOT upload private passwords, API keys, UPI PINs or OTPs.
