const express = require('express');
const app = express();

// GET /hello
app.get('/hello', (req, res) => {
  res.send('Hello Express JS');
});

// GET /user with query parameters
app.get('/user', (req, res) => {
  const firstname = req.query.firstname || 'John';
  const lastname = req.query.lastname || 'Doe';
  res.json({ firstname, lastname });
});

// POST /user with path parameters
app.post('/user/:firstname/:lastname', (req, res) => {
  const { firstname, lastname } = req.params;
  res.json({ firstname, lastname });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
