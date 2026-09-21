# HealX

Built piece by piece so each part is easy to follow. This README grows as
new pieces are added.

## Stack

- **Frontend:** React + Vite
- **Backend:** Vercel Serverless Functions (plain Node.js — no Express)
- **Database:** Turso (hosted, SQLite-compatible)

Frontend and backend deploy together as **one Vercel project** — this is
different from Piece 1, which used a separate Express server and local
SQLite file. We switched so everything can live on Vercel with no
separate hosting needed.

## Folder structure

```
healx/
  api/            Each file here is one backend endpoint.
                  api/health.js  ->  GET/POST to /api/health
  api/_lib/       Shared code (like the db client). The underscore tells
                  Vercel "this isn't a route, don't publish it as one."
  src/            React app (pages, components, styles)
  index.html      Vite entry point
```

## Progress: pieces built so far

- [x] **Piece 1 — Scaffold** (Express + local SQLite version — superseded)
- [x] **Piece 1B — Migrated to Vercel + Turso.** Same idea as Piece 1
      (frontend calls `/api/health`, gets back a message + user count) but
      now running as a serverless function against a hosted database.
- [ ] Piece 2 — Landing page (Patient / Healthcare Partner pathways + Siya bar)
- [ ] Piece 3 — Patient auth
- [ ] ... (rest of the plan continues as we build)

## One-time setup: get a free Turso database

You only do this once for the whole project.

**1. Install the Turso CLI** (in your Codespace terminal, at the repo root):
```bash
curl -sSfL https://get.tur.so/install.sh | bash
```

**2. Sign up / log in** (opens a browser link to authenticate):
```bash
turso auth signup
```

**3. Create the database:**
```bash
turso db create healx
```

**4. Get your two secret values:**
```bash
turso db show healx --url
turso db tokens create healx
```
The first command prints your `TURSO_DATABASE_URL`. The second prints your
`TURSO_AUTH_TOKEN`. Keep this terminal output visible for the next step.

## One-time setup: install the Vercel CLI

```bash
npm install -g vercel
```

## Running the project locally

**1. Install dependencies** (repo root, only one `package.json` now):
```bash
npm install
```

**2. Create your `.env` file** with the values from the Turso step above:
```bash
cat > .env << 'EOF'
TURSO_DATABASE_URL=paste-your-url-here
TURSO_AUTH_TOKEN=paste-your-token-here
EOF
```

**3. Start everything with one command:**
```bash
vercel dev
```
The first time you run this, it'll ask a few setup questions (link to a
Vercel account/project) — accept the defaults, they're just for local dev
bookkeeping. It will also ask to confirm the settings it detected (Vite
framework, build command, output directory) — accept those too.

Open the URL it prints (usually `http://localhost:3000`). You should see:
```
HealX
Backend says: HealX backend is running
```
That message now travels: browser → Vercel dev server → `api/health.js` →
Turso (over the internet) → back. Same idea as Piece 1, real hosted
database this time.

## Deploying for real

Once you're happy with a piece, from the repo root:
```bash
vercel
```
Follow the prompts (link to your Vercel account, accept the detected
settings). You'll also need to add `TURSO_DATABASE_URL` and
`TURSO_AUTH_TOKEN` as environment variables in the Vercel project's
dashboard (Settings → Environment Variables) — `.env` files are never
uploaded, so Vercel doesn't see your local one automatically.
