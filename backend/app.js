// app.js
const express = require('express');
const viewsService = require('./service-views/views');
const logsService = require('./service-logs/logs');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3001;
// 使用 CORS 中間件
app.use(cors());

// Views Service
app.get('/increase-view', (req, res) => {
  viewsService.increaseViewCount();
  res.json({ message: 'View count increased' });
});

app.get('/get-view-count', (req, res) => {
  const viewCount = viewsService.getViewCount();
  res.json({ viewCount });
});

// Logs Service
app.use('/logs', logsService);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
