# HealX

Built piece by piece so each part is easy to follow. This README grows as
new pieces are added.

## Stack

- **Frontend:** React + Vite
- **Backend:** Node.js + Express
- **Database:** SQLite (a single file, no server to install)

## Folder structure

```
healx/
  backend/     Express API + SQLite database
  frontend/    React app (Vite)
```

The frontend and backend are two separate programs that run at the same
time, on two different ports, and talk to each other over HTTP.

## Progress: pieces built so far

- [x] **Piece 1 — Scaffold.** Backend serves `/api/health`; frontend calls
      it on load and displays the result. Proves the two sides are wired
      together correctly before any real features are added.
- [ ] Piece 2 — Landing page (Patient / Healthcare Partner pathways + Siya bar)
- [ ] Piece 3 — Patient auth
- [ ] ... (rest of the plan continues as we build)

## How to run it

You'll need [Node.js](https://nodejs.org) (v18 or later) installed.

**1. Start the backend** (in one terminal):
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```
You should see `[server] HealX backend listening on http://localhost:4000`.

**2. Start the frontend** (in a second terminal):
```bash
cd frontend
npm install
npm run dev
```
Open the URL it prints (usually `http://localhost:5173`).

You should see "HealX" and, underneath it, "Backend says: HealX backend
is running" — that message travels frontend → backend → database → back
to the browser. If it works, the foundation is solid and every later
piece builds on top of it.
