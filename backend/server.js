const express = require('express');
const cors = require('cors');
const { Client } = require('pg');

const app = express();
const PORT = 3000;

const client = new Client({
  user: 'postgres',
  host: 'db',
  database: 'testdb',
  password: 'password',
  port: 5432,
});

client.connect();

app.use(cors());  // <-- Add CORS middleware here

app.get('/api', async (req, res) => {
  const result = await client.query('SELECT NOW()');
  res.json({ message: 'Hello from backend!', time: result.rows[0].now });
});

app.listen(PORT, '0.0.0.0', () => console.log(`Backend running on port ${PORT}`));

