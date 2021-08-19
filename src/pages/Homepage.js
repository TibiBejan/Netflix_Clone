import React from 'react';
import Layout from '../components/layout/Layout';
import ResultsRow from '../components/layout/ResultsRow/ResultsRow';
import requests from '../api/Requests';

function Homepage() {
    return (
        <Layout>
            <ResultsRow 
                title="Popular on Netflix" 
                reqLinks={[requests.tv.getPopularTv, requests.movies.getPopularMovies]} 
            />
        </Layout>
    )
}

export default Homepage;
