const API_KEY = process.env.REACT_APP_TMDB_KEY;

const requests = {
    tv: {
        netflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
        getPopularTv: `tv/popular?api_key=${API_KEY}&language=en-US`,
    },
    movies: {
        getMovieCredits: `https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=${API_KEY}&language=en-US`,
        getPopularMovies: `movie/popular?api_key=${API_KEY}&language=en-US`,
        getNowPlayingOriginals: `movie/now_playing?api_key=${API_KEY}&language=en-US`,
    },
    genres: {
        getTvGenres: `https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}&language=en-US`, 
        getMovieGenres: `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`,
    },  
}

export default requests;