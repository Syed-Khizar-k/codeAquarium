# Wiring the Free Consultancy page to your Google Sheet

Bookings from `/free-consultancy` are appended to your sheet via a small Google
Apps Script Web App. No API keys or service accounts needed. One-time setup:

## 1. Add the script to the sheet

1. Open the sheet:
   https://docs.google.com/spreadsheets/d/1qm7Avga6wpM_lvqMI3xiCS4rK-wjSk8tuwhiN-Chw_o/edit
2. Menu: **Extensions → Apps Script**.
3. Delete anything in `Code.gs`, then paste the full contents of
   [`Code.gs`](./Code.gs) from this folder.
4. Click **Save** (💾).

## 2. Deploy as a Web App

1. In the Apps Script editor: **Deploy → New deployment**.
2. Click the gear ⚙️ next to "Select type" → **Web app**.
3. Set:
   - **Description**: `Code Aquarium bookings`
   - **Execute as**: **Me**
   - **Who has access**: **Anyone**  ← required so the site can POST to it
4. Click **Deploy**, then **Authorize access** and approve the permissions
   (Google will warn it's an unverified app you wrote — that's expected).
5. Copy the **Web app URL**. It ends in `/exec`.

> Tip: paste the `/exec` URL into a browser — you should see
> `{"ok":true,"service":"code-aquarium-bookings"}`. That confirms it's live.

## 3. Point the site at it

Create (or edit) `.env.local` in the project root:

```
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/XXXXXXXX/exec
```

Restart the dev server (`npm run dev`) or redeploy so the env var loads.

On your host (Vercel/Netlify/etc.), add the same variable under the project's
Environment Variables and redeploy.

## 4. Test

Go to `/free-consultancy`, pick a date + time, fill in the form, and confirm.
A new row appears in the **Bookings** tab. The header row is created
automatically on the first booking.

## Updating the script later

If you edit `Code.gs`, redeploy: **Deploy → Manage deployments → ✏️ (edit) →
Version: New version → Deploy**. The `/exec` URL stays the same.

## Columns written

`Submitted At · Name · Email · Phone · Company · Service · Message · Date ·
Date (ISO) · Time · Time (24h) · Timezone · Event · Duration`
