# Rekod Produksi — tablet + Google Sheets

This folder is ready for **GitHub Pages**. It is a Progressive Web App (PWA), so it can be installed on an Android tablet or iPad and continues storing entries when the internet is unavailable.

## One-time Google Sheet setup

Google must own the Sheet and Apps Script deployment, so this is the only setup done from your Google account.

1. Create a blank Google Sheet. Choose **Extensions → Apps Script**.
2. Delete the sample code. Copy and paste all code from `google-apps-script/Code.gs`, then click **Save**.
3. Click **Deploy → New deployment → Select type: Web app**.
4. Set **Execute as: Me** and **Who has access: Anyone**, then click **Deploy**. Approve Google's permissions when asked.
5. Copy the **Web app URL** (it ends in `/exec`).
6. In `app.js`, replace `PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE` with that URL. Save the file.

## Deploy to GitHub Pages

1. Create a new GitHub repository.
2. Upload every file and folder inside this `production-tracker` folder to the repository root. Do not upload the outer folder itself.
3. In the repository, go to **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then click **Save**.
4. Open the GitHub Pages URL on the tablet.

## Install on tablet

- **Android / Chrome:** tap the browser menu → **Install app** (or **Add to Home screen**).
- **iPad / Safari:** tap Share → **Add to Home Screen**.

The app queues data in the tablet if internet is not available. When back online, open the app and tap **Hantar semula**. Never clear browser/site data before queued records are sent.
