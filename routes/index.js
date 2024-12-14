const express = require('express');
const path = require('path');
const router = express.Router();

// Serve static files (movies)
router.use('/movies', express.static(path.join(__dirname, '../movies')));

// Import movie routes
const movieRoutes = require('./movies');
router.use('/stream', movieRoutes);

module.exports = router;
