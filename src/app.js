const express = require('express');
const bookRoutes = require('./routes/bookRoutes');

const app = express();

// Middleware untuk membaca JSON
app.use(express.json());

// Routes
app.use('/books', bookRoutes);

// Middleware 404
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Endpoint tidak ditemukan'
    });
});

// Global Error Handler
app.use((err, req, res, next) => {
    res.status(500).json({
        success: false,
        message: err.message || 'Terjadi kesalahan pada server'
    });
});

module.exports = app;