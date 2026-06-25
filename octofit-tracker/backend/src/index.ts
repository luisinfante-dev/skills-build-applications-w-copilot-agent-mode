import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 8000);

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'octofit-backend' });
});

app.get('/api/users', (_req, res) => {
  res.json([
    { _id: '1', name: 'Avery', email: 'avery@example.com' },
    { _id: '2', name: 'Jordan', email: 'jordan@example.com' },
  ]);
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Backend listening on port ${port}`);
});
