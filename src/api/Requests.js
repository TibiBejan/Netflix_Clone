const API_KEY = process.env.REACT_APP_TMDB_KEY;

const requests = {
    tv: {
        netflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
        getPopularTv: `tv/popular?api_key=${API_KEY}&language=en-US&with_networks=213`,
        getLatestTv: `tv/latest?api_key=${API_KEY}&language=en-US&with_networks=213`,
        getTopRatedTv: `tv/top_rated?api_key=${API_KEY}&language=en-US&page=1&with_networks=213`,
        getAiringTodayTv: `tv/airing_today?api_key=${API_KEY}&language=en-US&page=1&with_networks=213`
    },
    movies: {
        getNowPlayingOriginals: `movie/now_playing?api_key=${API_KEY}&language=en-US`,
        getPopularMovies: `movie/popular?api_key=${API_KEY}&language=en-US`,
        getLatestMovies: `movie/latest?api_key=${API_KEY}&language=en-US`,
        getTopRatedMovies: `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
        getNowPlayingMovies: `movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    },
    genres: {
        getTvGenres: `https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}&language=en-US`, 
        getMovieGenres: `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`,
    }
}

export default requests;