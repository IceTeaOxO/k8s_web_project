// service-logs/logs.js
const morgan = require('morgan');
const express = require('express');

const app = express();

// 使用 Morgan 中介軟體來監控 HTTP 請求的日誌

app.use(morgan('combined'));

module.exports = app;
