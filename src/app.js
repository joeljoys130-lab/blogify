const express = require('express');
const morgan = require('morgan');

const postsRouter = require('./routes/posts.routes');

const app = express();

// --- Middleware ---
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

// --- Routes ---
app.use('/api/v1/posts', postsRouter);

// Health check
app.get('/', (req, res) => {
  res.json({ success: true, message: 'Blogify API is running 🚀' });
});

// --- 404 Handler ---
app.use((req, res) => {
  res.status(404).json({ success: false, message: `Route ${req.originalUrl} not found` });
});

// --- Global Error Handler ---
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Internal Server Error' });
});

module.exports = app;
