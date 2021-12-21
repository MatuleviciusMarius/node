const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ res: 'hello' });
});

app.listen(8000, () => {
  console.log('app running');
});
