import React from 'react';
import requests from '../api/Requests';
import Layout from '../components/layout/Layout';
import ResultsRow from '../components/layout/ResultsRow/ResultsRow';
import TopRatedRow from '../components/layout/TopRatedRow/TopRatedRow';
import useFetch from '../hooks/useFetch';

function Homepage() {

    const { result, isLoading, error } = useFetch(requests.genres.getTvGenres);
    console.log(result && result.genres)

    return (
        <Layout>
            <ResultsRow 
                title="Popular on Netflix" 
                reqLinks={[requests.tv.getPopularTv, requests.movies.getPopularMovies]} 
            />
           <ResultsRow 
                title="Popular today" 
                reqLinks={[requests.tv.netflixOriginals, requests.movies.getNowPlayingOriginals]} 
            />
            <TopRatedRow 
                title="Top 10 in Romania today" 
                reqLinks={[requests.tv.getAiringTodayTv, requests.movies.getNowPlayingMovies]} 
                resultsLength={10}
                type='top-rated'
            />
        </Layout>
    )
}

export default Homepage;
