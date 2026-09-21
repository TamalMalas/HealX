import { db, ensureSchema } from './_lib/db.js';

// This file's PATH is its URL: api/health.js automatically becomes
// the endpoint /api/health. No manual route registration needed —
// that's the core idea of serverless functions on Vercel.
export default async function handler(req, res) {
  await ensureSchema();

  const result = await db.execute('SELECT COUNT(*) AS userCount FROM users');
  const userCount = result.rows[0].userCount;

  res.status(200).json({
    status: 'ok',
    message: 'HealX backend is running',
    userCount,
  });
}
