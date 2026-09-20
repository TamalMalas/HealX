import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbPath = process.env.DB_PATH || path.join(__dirname, '../healx.db');

// One shared connection, used everywhere in the backend.
// better-sqlite3 is *synchronous* — no await needed for queries.
// That's unusual for Node, but it makes the code much easier to read
// while you're learning, and it's fast enough for this size of app.
export const db = new Database(dbPath);

// Every table HealX needs gets defined here, once, at startup.
// "IF NOT EXISTS" makes this safe to run every single time the server boots —
// it only creates the table the first time, and does nothing after that.
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    role          TEXT NOT NULL CHECK (role IN ('patient', 'partner', 'admin')),
    mobile_number TEXT,
    google_id     TEXT,
    created_at    TEXT DEFAULT (datetime('now'))
  );
`);

console.log(`[db] SQLite ready at ${dbPath}`);
