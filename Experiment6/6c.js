const express = require('express');
const app = express();
app.get('/', (req, res) => {
  console.log('Hello World');
  res.send('Check Terminal for Output');
});
app.listen(3000, () => console.log('Server Started on http://localhost:3000'));
