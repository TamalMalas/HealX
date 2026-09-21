import { createClient } from '@libsql/client';

// One client, created when this file is first imported.
// On Vercel, serverless functions often get reused for a few minutes
// between requests ("warm" invocations) — when that happens, this
// module-level code does NOT re-run, so we're not reconnecting on
// every single request, just the first one after a cold start.
export const db = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

// Turso/libSQL calls are all async (network calls), unlike better-sqlite3
// which was synchronous. That's the main mental shift from Piece 1 —
// every db.execute(...) now needs an `await` in front of it.
let schemaReady = false;

export async function ensureSchema() {
  if (schemaReady) return; // skip on every warm invocation after the first
  await db.execute(`
    CREATE TABLE IF NOT EXISTS users (
      id            INTEGER PRIMARY KEY AUTOINCREMENT,
      role          TEXT NOT NULL CHECK (role IN ('patient', 'partner', 'admin')),
      mobile_number TEXT,
      google_id     TEXT,
      created_at    TEXT DEFAULT (datetime('now'))
    );
  `);
  schemaReady = true;
}
