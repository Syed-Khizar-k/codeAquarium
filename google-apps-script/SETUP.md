# Wiring the Free Consultancy page to your Google Sheet & Email Reminders

Bookings from `/free-consultancy` are appended to your sheet and trigger instant email reminders via a Google Apps Script Web App. No paid API keys or third-party email services needed.

---

## 1. Add the script to the sheet

1. Open your target Google Sheet:
   https://docs.google.com/spreadsheets/d/1qm7Avga6wpM_lvqMI3xiCS4rK-wjSk8tuwhiN-Chw_o/edit
2. In the top menu, go to: **Extensions → Apps Script**.
3. Delete anything in `Code.gs`, and paste the contents of [`Code.gs`](./Code.gs).
4. *(Optional)* At the top of `Code.gs`, set your email for reminders:
   ```javascript
   var NOTIFICATION_EMAIL = 'your-email@example.com';
   ```
   *(If left empty, it will automatically email the Google account owner of the sheet).*
5. Click **Save** (💾).

---

## 2. Deploy as a Web App

1. In the Apps Script editor, click **Deploy → New deployment**.
2. Click the gear ⚙️ next to "Select type" → **Web app**.
3. Configure settings:
   - **Description**: `Code Aquarium bookings & reminders`
   - **Execute as**: **Me**
   - **Who has access**: **Anyone**  ← *(Required so submissions can reach the script)*
4. Click **Deploy**, then **Authorize access** and allow permissions (Gmail + Sheets).
5. Copy the **Web app URL** (ends in `/exec`).

---

## 3. Point the site at it

In `.env.local` in the project root:

```env
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_DEPLOYED_ID/exec
```

Restart the dev server (`npm run dev`) or redeploy your hosting environment (Vercel/Netlify).

---

## 4. How Reminders Work

When a user submits the booking form:
1. **Google Sheet**: A new row is added under the **`Bookings`** tab.
2. **Admin Email Reminder**: You immediately receive an email notification with the client's name, email, phone, company, service requested, meeting time, and notes.
3. **Client Confirmation Email**: The client receives a confirmation email acknowledging their booking.

---

## Updating the script later

Whenever you update `Code.gs`, update the deployment:
**Deploy → Manage deployments → ✏️ (Edit) → Version: "New version" → Deploy**.
