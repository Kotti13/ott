const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/:movieId', (req, res) => {
    const movieId = req.params.movieId;
    const moviePath = path.join(__dirname, '../../movies', `${movieId}.mp4`);
    res.sendFile(moviePath);
});

module.exports = router;
