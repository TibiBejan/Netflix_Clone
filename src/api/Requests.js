const API_KEY = process.env.REACT_APP_TMDB_KEY;

const requests = {
    tv: {
        categories: [
            {
                title: 'Netflix Originals',
                endpoint: `discover/tv?api_key=${API_KEY}&with_networks=213`,
                cardType: 'originals'
            },
            {
                title: 'Popular on Netflix',
                endpoint: `tv/popular?api_key=${API_KEY}&language=en-US&with_networks=21`,
            },
            {
                title: 'Top 10 in Romania today',
                endpoint: `tv/airing_today?api_key=${API_KEY}&language=en-US&page=1&with_networks=213`,
                cardType: 'top-rated',
				resultsLength: 10
            },
            {
				title: 'Sci-Fi & Fantasy',
				endpoint: `discover/tv?api_key=${API_KEY}&with_genres=10765&with_watch_providers=8&watch_region=US`
			},
            {
				title: 'Comedy',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=35&with_watch_providers=8&watch_region=US`
			},
            {
				title: 'Family',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=10751&with_watch_providers=8&watch_region=US`
			},
            {
				title: 'Animation',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=16&with_watch_providers=8&watch_region=US`
			},
            {
				title: 'Drama',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=18&with_watch_providers=8&watch_region=US`
			},
            {
				title: 'Mystery',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=9648&with_watch_providers=8&watch_region=US`
			},
			{
				title: 'Action-Adventure',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=10759&with_watch_providers=8&watch_region=US`
			},
			{
				title: 'Crime',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=80&with_watch_providers=8&watch_region=US`
			},
            {
				title: 'War Politics',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=10768&with_watch_providers=8&watch_region=US`
			},
			{
				title: 'Documentary',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=99&with_watch_providers=8&watch_region=US`
			},
			{
				title: 'Reality',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=10764&with_watch_providers=8&watch_region=US`
			},
			{
				title: 'Soap',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=10766&with_watch_providers=8&watch_region=US`
			},
			{
				title: 'Talk',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=10767&with_watch_providers=8&watch_region=US`
			}
        ],
        helpers: {
            searchTV: `/search/tv?api_key=${API_KEY}&query={{query}}`,
			fetchTVGenres: `genre/tv/list?api_key=${API_KEY}`,
			fetchTVVideos: `/tv/{{tv_id}}/videos?api_key=${API_KEY}`,
			fetchTVDetails: `/tv/{{tv_id}}?api_key=${API_KEY}`,
			fetchTVAggregateCredits: `/tv/{{tv_id}}/aggregate_credits?api_key=${API_KEY}`,
			fetchTVRecommendations: `/tv/{{tv_id}}/recommendations?api_key=${API_KEY}`,
			fetchTVSeason: `/tv/{{tv_id}}/season/{{season_number}}?api_key=${API_KEY}`
        },



        netflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
        getPopularTv: `tv/popular?api_key=${API_KEY}&language=en-US&with_networks=213`,
        getLatestTv: `tv/latest?api_key=${API_KEY}&language=en-US&with_networks=213`,
        getTopRatedTv: `tv/top_rated?api_key=${API_KEY}&language=en-US&page=1&with_networks=213`,
        getAiringTodayTv: `tv/airing_today?api_key=${API_KEY}&language=en-US&page=1&with_networks=213`
    },
    movies: {
        categories: [
            {
                title: 'Netflix Originals',
                endpoint: `/discover/movie?api_key=${API_KEY}&with_watch_providers=8`,
                cardType: 'originals'
            },
            {
                title: 'Popular on Netflix',
                endpoint: `/movie/popular?api_key=${API_KEY}&sort_by=vote_average.desc`,
            },
            {
                title: 'Top 10 in Romania today',
                endpoint: `movie/now_playing?api_key=${API_KEY}&language=en-US`,
                cardType: 'top-rated',
				resultsLength: 10
            },
            {
				title: 'Sci-Fi',
				endpoint: `discover/movie?api_key=${API_KEY}&with_genres=878&with_watch_providers=8&watch_region=US`
			},
            {
				title: 'Thriller',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=53&with_watch_providers=8&watch_region=US`
			},
			{
				title: 'Romance',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=10749&with_watch_providers=8&watch_region=US`
			},
            {
				title: 'Action',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=28&with_watch_providers=8&watch_region=US`
			},
			{
				title: 'Adventure',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=12&with_watch_providers=8&watch_region=US`
			},
            {
				title: 'Family',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=10751&with_watch_providers=8&watch_region=US`
			},
            {
				title: 'Comedy',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=35&with_watch_providers=8&watch_region=US`
			},
			{
				title: 'Animation',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=16&with_watch_providers=8&watch_region=US`
			},
			{
				title: 'Music',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=10402&with_watch_providers=8&watch_region=US`
			},
            {
				title: 'Fantasy',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=14&with_watch_providers=8&watch_region=US`
			},
			{
				title: 'Drama',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=18&with_watch_providers=8&watch_region=US`
			},
            {
				title: 'Mystery',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=9648&with_watch_providers=8&watch_region=US`
			},
			{
				title: 'Crime',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=80&with_watch_providers=8&watch_region=US`
			},			
			{
				title: 'TV',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=10770&with_watch_providers=8&watch_region=US`
			},
			{
				title: 'Documentary',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=99&with_watch_providers=8&watch_region=US`
			},
			{
				title: 'War',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=10752&with_watch_providers=8&watch_region=US`
			},
			{
				title: 'History',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=36&with_watch_providers=8&watch_region=US`
			},
			{
				title: 'Western',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=37&with_watch_providers=8&watch_region=US`
			},
        ],
        helpers: {
			searchMovie: `/search/movie?api_key=${API_KEY}&query={{query}}`,
			fetchMovieGenres: `genre/movie/list?api_key=${API_KEY}`,
			fetchMovieVideos: `/movie/{{movie_id}}/videos?api_key=${API_KEY}`,
			fetchMovieDetails: `/movie/{{movie_id}}?api_key=${API_KEY}`,
			fetchMovieRecommendations: `/movie/{{movie_id}}/recommendations?api_key=${API_KEY}`,
			fetchMovieCredits: `/movie/{{movie_id}}/credits?api_key=${API_KEY}`
        },

        getNowPlayingOriginals: `movie/now_playing?api_key=${API_KEY}&language=en-US`,
        getPopularMovies: `movie/popular?api_key=${API_KEY}&language=en-US`,
        getLatestMovies: `movie/latest?api_key=${API_KEY}&language=en-US`,
        getTopRatedMovies: `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
        getNowPlayingMovies: `movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    },
}

export default requests;