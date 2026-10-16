const express = require('express');
const mysql = require('mysql2');
const app = express();
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'college'
});

db.connect(err => {
  if (err) { console.error('Database connection failed:', err.message); process.exitCode = 1; return; }
  console.log('Database Connected');
  app.get('/students', (req, res) => {
    db.query('SELECT * FROM students', (queryError, rows) => {
      if (queryError) return res.status(500).json({ error: 'Database query failed' });
      res.json(rows);
    });
  });
  app.listen(3000, () => console.log('Server Running on http://localhost:3000'));
});
