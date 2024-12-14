document.addEventListener("DOMContentLoaded", function() {
    const movies = document.querySelectorAll('.movie');

    movies.forEach(movie => {
        movie.addEventListener('click', function() {
            const movieId = this.getAttribute('data-id');
            loadMovie(movieId);
        });
    });

    function loadMovie(movieId) {
        const videoSource = document.getElementById('video-source');
        const videoPlayer = document.getElementById('movie-video');

        // Set the source based on the movie ID
        videoSource.src = `/movies/movie${movieId}.mp4`;

        // Re-load and play the video
        videoPlayer.load();
        videoPlayer.play();
    }
});
