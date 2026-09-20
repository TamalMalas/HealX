import { Router } from 'express';
import { db } from '../db.js';

const router = Router();

// GET /api/health
// Purpose: let the frontend (and you, in a browser) confirm two things
// at once — the server is running, and it can talk to the database.
router.get('/health', (req, res) => {
  const row = db.prepare('SELECT COUNT(*) AS userCount FROM users').get();

  res.json({
    status: 'ok',
    message: 'HealX backend is running',
    userCount: row.userCount,
  });
});

export default router;
