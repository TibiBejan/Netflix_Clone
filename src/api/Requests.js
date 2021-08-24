const API_KEY = process.env.REACT_APP_TMDB_KEY;

const requests = {
    tv: {
        categories: [
            {
                title: 'Netflix Originals',
                endpoint: `discover/tv?api_key=${API_KEY}&with_networks=213`,
                cardType: 'tall'
            },
            {
                title: 'Popular on Netflix',
                endpoint: `tv/popular?api_key=${API_KEY}&language=en-US&with_networks=21`,
            },
			{
				title: 'Action',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=10759&with_watch_providers=8&watch_region=US`
			},
			{
				title: 'Science Fiction',
				endpoint: `discover/tv?api_key=${API_KEY}&with_genres=10765&with_watch_providers=8&watch_region=US`
			},
			{
				title: 'Comedy',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=35&with_watch_providers=8&watch_region=US`
			},
            {
                title: 'Top 10 in Romania today',
                endpoint: `tv/airing_today?api_key=${API_KEY}&language=en-US&page=1&with_networks=213`,
                cardType: 'tall',
				resultsLength: 10
            },
			{
				title: 'Adventure',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=10759&with_watch_providers=8&watch_region=US`
			},
            {
				title: 'Fantasy',
				endpoint: `discover/tv?api_key=${API_KEY}&with_genres=10765&with_watch_providers=8&watch_region=US`
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
				title: 'Kids',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=10762&with_watch_providers=8&watch_region=US`
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
				title: 'Crime',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=80&with_watch_providers=8&watch_region=US`
			},
            {
				title: 'War & Politics',
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
			},
			{
				title: 'Western',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=37&with_watch_providers=8&watch_region=US`
			}
        ],
        helpers: {
            searchTV: `/search/tv?api_key=${API_KEY}&query={{query}}`,
			fetchTVGenres: `genre/tv/list?api_key=${API_KEY}`,
			fetchTVVideos: `/tv/{{tv_id}}/videos?api_key=${API_KEY}`,
			fetchTVDetails: `/tv/{{tv_id}}?api_key=${API_KEY}`,
			fetchTVAggregateCredits: `/tv/{{tv_id}}/aggregate_credits?api_key=${API_KEY}`,
			fetchTVRecommendations: `/tv/{{tv_id}}/recommendations?api_key=${API_KEY}`,
			fetchTVSeason: `/tv/{{tv_id}}/season/{{season_number}}?api_key=${API_KEY}`,
			fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213`,
        }
    },
    movies: {
        categories: [
            {
                title: 'Netflix Originals',
                endpoint: `/discover/movie?api_key=${API_KEY}&with_watch_providers=8`,
                cardType: 'tall'
            },
            {
                title: 'Popular on Netflix',
                endpoint: `/movie/popular?api_key=${API_KEY}&sort_by=vote_average.desc`,
            },
			{
				title: 'Action',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=28&with_watch_providers=8&watch_region=US`
			},
			{
				title: 'Science Fiction',
				endpoint: `discover/movie?api_key=${API_KEY}&with_genres=878&with_watch_providers=8&watch_region=US`
			},
			{
				title: 'Comedy',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=35&with_watch_providers=8&watch_region=US`
			},
            {
                title: 'Top 10 in Romania today',
                endpoint: `movie/now_playing?api_key=${API_KEY}&language=en-US`,
                cardType: 'tall',
				resultsLength: 10
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
				title: 'Adventure',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=12&with_watch_providers=8&watch_region=US`
			},
            {
				title: 'Family',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=10751&with_watch_providers=8&watch_region=US`
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
				title: 'Horror',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=27&with_watch_providers=8&watch_region=US`
			},			
			{
				title: 'TV Movie',
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
    },
	mood: [
		{
			title: 'Date Night',
			icon: require(`../assets/icons/heart.svg`).default,
			endpoints: [
				`/discover/movie?api_key=${API_KEY}&with_genres=10749|35|9648&with_watch_providers=8&watch_region=US`,
				`/discover/tv?api_key=${API_KEY}&with_genres=35|9648&with_watch_providers=8&watch_region=US`
			]
		},
		{
			title: 'Lazy evening',
			icon: require(`../assets/icons/coffee.svg`).default,
			endpoints: [
				`/discover/movie?api_key=${API_KEY}&with_watch_providers=8&with_genres=878|35|12|10751|14`,
				`discover/tv?api_key=${API_KEY}&with_networks=213&with_genres=10765|35|10759|10765|10751`,
			]
		},
		{
			title: 'Mind-bending',
			icon: require(`../assets/icons/brain.svg`).default,
			endpoints: [
				`/discover/movie?api_key=${API_KEY}&with_genres=53|9648|80&with_watch_providers=8&watch_region=US`,
				`/discover/tv?api_key=${API_KEY}&with_genres=9648|80&with_watch_providers=8&watch_region=US`
			],
		},
		{
			title: 'Humor',
			icon: require(`../assets/icons/laughing.svg`).default,
			endpoints: [
				`/discover/movie?api_key=${API_KEY}&with_genres=35|10751&with_watch_providers=8&watch_region=US`,
				`/discover/tv?api_key=${API_KEY}&with_genres=35|10751&with_watch_providers=8&watch_region=US`
			],
		},
		{
			title: 'Action',
			icon: require(`../assets/icons/running-man.svg`).default,
			endpoints: [
				`/discover/movie?api_key=${API_KEY}&with_genres=28|12&with_watch_providers=8&watch_region=US`,
				`/discover/tv?api_key=${API_KEY}&with_genres=10759&with_watch_providers=8&watch_region=US`
			],
		},
		{
			title: 'Friends',
			icon: require(`../assets/icons/couch-sofa.svg`).default,
			endpoints: [
				`/movie/popular?api_key=${API_KEY}&sort_by=vote_average.desc`,
				`/tv/popular?api_key=${API_KEY}&language=en-US&with_networks=21`,
			],
		},
		{
			title: 'Inner Child',
			icon: require(`../assets/icons/teddy-bear.svg`).default,
			endpoints: [
				`/discover/movie?api_key=${API_KEY}&with_genres=10751|16|10402&with_watch_providers=8&watch_region=US`,
				`/discover/tv?api_key=${API_KEY}&with_genres=10751|16&with_watch_providers=8&watch_region=US`
			],
		},
		{
			title: 'Sentimental',
			icon: require(`../assets/icons/sentimental.svg`).default,
			endpoints: [
				`/discover/movie?api_key=${API_KEY}&with_genres=10749|18|9648&with_watch_providers=8&watch_region=US`,
				`/discover/tv?api_key=${API_KEY}&with_genres=18|9648&with_watch_providers=8&watch_region=US`
			],
		},
		{
			title: 'Last Hangover',
			icon: require(`../assets/icons/wine-glass.svg`).default,
			endpoints: [
				`/discover/movie?api_key=${API_KEY}&with_genres=35&with_watch_providers=8&watch_region=US`,
				`/movie/popular?api_key=${API_KEY}&sort_by=vote_average.desc`,
				`/discover/tv?api_key=${API_KEY}&with_genres=35&with_watch_providers=8&watch_region=US`,
				`tv/popular?api_key=${API_KEY}&language=en-US&with_networks=21`,
			],
		},
		{
			title: 'Learn',
			icon: require(`../assets/icons/opened-book.svg`).default,
			endpoints: [
				`/discover/movie?api_key=${API_KEY}&with_genres=36|99&with_watch_providers=8&watch_region=US`,
				`/discover/tv?api_key=${API_KEY}&with_genres=99&with_watch_providers=8&watch_region=US`
			],
		},
		{
			title: 'Explore World',
			icon: require(`../assets/icons/globe.svg`).default,
			endpoints: [
				`/discover/movie?api_key=${API_KEY}&with_genres=36|10752|99&with_watch_providers=8&watch_region=US`,
				`/discover/tv?api_key=${API_KEY}&with_genres=10767|10766|10764|99|10768&with_watch_providers=8&watch_region=US`
			],
		},
		{
			title: 'Be Inspired',
			icon: require(`../assets/icons/bulb.svg`).default,
			endpoints: [
				`/discover/movie?api_key=${API_KEY}&with_genres=99&with_watch_providers=8&watch_region=US`,
				`/discover/tv?api_key=${API_KEY}&with_genres=10767|99&with_watch_providers=8&watch_region=US`
			],
		},
		{
			title: 'Sci Fi',
			icon: require(`../assets/icons/alien.svg`).default,
			endpoints: [
				`/discover/movie?api_key=${API_KEY}&with_genres=14|878&with_watch_providers=8&watch_region=US`,
				`discover/tv?api_key=${API_KEY}&with_genres=10765&with_watch_providers=8&watch_region=US`
			],
		},
		{
			title: "I don't know",
			icon: require(`../assets/icons/dices.svg`).default,
			endpoints: [
				`/discover/movie?api_key=${API_KEY}&with_watch_providers=8&watch_region=US&page={{number}}`,
				`discover/tv?api_key=${API_KEY}&with_genres=10765&with_watch_providers=8&watch_region=US&page={{number}}`
			],
		},
		{
			title: "Be Scared",
			icon: require(`../assets/icons/knife.svg`).default,
			endpoints: [
				`/discover/movie?api_key=${API_KEY}&with_genres=27|80&with_watch_providers=8&watch_region=US`,
				`/discover/tv?api_key=${API_KEY}&with_genres=80&with_watch_providers=8&watch_region=US`
			],
		},
		{
			title: "Heart-break",
			icon: require(`../assets/icons/broken-heart.svg`).default,
			endpoints: [
				`/discover/movie?api_key=${API_KEY}&with_genres=10752|80|18&with_watch_providers=8&watch_region=US`,
				`/discover/tv?api_key=${API_KEY}&with_genres=10768|80|18&with_watch_providers=8&watch_region=US`
			],
		},
	],
	people: {
		fetchPopularPeople: `/person/popular?api_key=${API_KEY}&language=en-US&page=1`,
		fetchPersonDetails: `/person/{{person_id}}?api_key=${API_KEY}&language=en-US`,
		searchPerson: `/search/person?api_key=${API_KEY}&language=en-US&include_adult=false&query={{query}}`
	}
}

export default requests;