# Photographer Workflow Survey

Static survey form + live analytics dashboard. Free to host. No build step, no framework.

- **Form:** `index.html` — 22 photographer questions from `aidlc-docs/research.md`.
- **Dashboard:** `dashboard.html` — live bar charts per question + CSV export (Chart.js via CDN).
- **Backend:** `Code.gs` — Google Apps Script Web App storing responses in a Google Sheet (free).
- **Schema:** `questions.js` — single source of truth shared by form and dashboard.
- **Config:** `config.js` — holds the backend URL.

## Architecture

```
index.html  --POST answers-->  Apps Script Web App  --append row-->  Google Sheet
dashboard.html  --GET json-->  Apps Script Web App  <--read rows--   Google Sheet
```

Everything is static, so the form/dashboard host anywhere free (GitHub Pages, Netlify, Cloudflare Pages). Only the data store needs the (also free) Apps Script.

## Setup (~10 min, one time)

### 1. Create the Google Sheet
- Go to [sheets.new](https://sheets.new) (signed in as the account that should own the data).
- Name it e.g. "Photographer Survey".

### 2. Add the backend
- In that sheet: **Extensions > Apps Script**.
- Delete the default `function myFunction() {}`.
- Paste the full contents of `Code.gs`. Save.

### 3. Deploy as Web App
- **Deploy > New deployment**.
- Gear icon > **Web app**.
- Settings:
  - **Execute as:** Me
  - **Who has access:** Anyone
- **Deploy**, authorize when prompted (it's your own script).
- Copy the **Web app URL** ending in `/exec`.

### 4. Wire it up
- Open `config.js`, replace the placeholder with your `/exec` URL:
  ```js
  window.SURVEY_ENDPOINT = "https://script.google.com/macros/s/AKfy..../exec";
  ```

### 5. Host the form (free) — pick one

**GitHub Pages**
```bash
# from repo root
git add survey && git commit -m "Add photographer survey"
git push
```
Then GitHub repo > **Settings > Pages** > Source = `main` branch, `/` root (or move `survey/` to its own repo).
Form lives at: `https://<user>.github.io/<repo>/survey/index.html`

**Netlify / Cloudflare Pages (fastest)**
- Drag-and-drop the `survey/` folder into [app.netlify.com/drop](https://app.netlify.com/drop).
- Done — you get a public URL instantly.

### 6. Test
- Open the hosted `index.html`, submit a test answer.
- Open `dashboard.html` — your test should appear (auto-refreshes every 15s).
- Delete the test row from the Sheet if you want a clean start.

## Local preview
```bash
cd survey
python -m http.server 8080
# open http://localhost:8080
```
(Submitting locally still writes to the live Sheet once `config.js` is set.)

## Editing questions
Edit `questions.js` only. Both form and dashboard update automatically.
- `type: "single"` → radio (pick one)
- `type: "multi"` → checkbox; add `max: 2` to cap selections
- An option literally named `"Other"` renders a free-text box; stored as `Other: <text>`, aggregated as `Other`.

## Notes
- Apps Script `doPost` uses `text/plain` content type to skip CORS preflight — don't change the form's request header.
- The Sheet is the database; export anytime via **File > Download**, or the dashboard's **Download CSV**.
- Responses are anonymous (no IP, no auth). Add a name/email field in `questions.js` if you need attribution.
- If you redeploy `Code.gs` changes, use **Deploy > Manage deployments > Edit > New version** to keep the same URL.
