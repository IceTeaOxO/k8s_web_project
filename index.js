const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

let viewCount = 0;

app.get('/', (req, res) => {
  viewCount++;
  res.json({ viewCount });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
