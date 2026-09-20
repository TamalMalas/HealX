import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import healthRouter from './routes/health.js';

const app = express();
const PORT = process.env.PORT || 4000;

// --- Middleware ---
// cors: lets the frontend (running on a different port, 5173) call this API.
//       Browsers block "cross-origin" requests by default; this opts in.
app.use(cors());

// express.json: reads incoming JSON request bodies and puts the result on req.body,
//               so later routes can just read req.body.someField.
app.use(express.json());

// --- Routes ---
// Every route in healthRouter is automatically prefixed with /api.
// So the /health route in health.js becomes /api/health here.
app.use('/api', healthRouter);

// --- Start ---
app.listen(PORT, () => {
  console.log(`[server] HealX backend listening on http://localhost:${PORT}`);
});
