const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ res: 'hello' });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
