import express from 'express';
import airports from './airports.js';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/airports', (req, res) => {
  res.json(airports);
});

app.listen(PORT, () => {
  console.log(`API server running at http://localhost:${PORT}`);
});
