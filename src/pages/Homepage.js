import React from 'react';
import requests from '../api/Requests';
import Layout from '../components/layout/Layout';
import ResultsRow from '../components/layout/ResultsRow/ResultsRow';
import TopRatedRow from '../components/layout/TopRatedRow/TopRatedRow';

function Homepage() {

    const reqEndpoints = requests.tv.categories.map(tvCategory => {
        return requests.movies.categories.reduce((acc, obj) => {
            if(tvCategory.title === obj.title) {
                acc.title = obj.title;
                acc.endpoints = [tvCategory.endpoint, obj.endpoint];
                acc.cardType = obj.cardType ? obj.cardType : 'wide';
                acc.resultsLength = obj.resultsLength ? obj.resultsLength : 40;
            }
            return acc;
        }, {
            title: null,
            endpoints: null,
            cardType: null,
            resultsLength: null
        });
    }).filter(request => request.length !== 0);

    return (
        <Layout>
            {reqEndpoints.map((endpoint, index) => (
                <ResultsRow 
                    key={`${endpoint}${index}`}
                    title={endpoint.title} 
                    reqLinks={endpoint.endpoints} 
                    resultsLength={endpoint.resultsLength}
                />
            ))}
             {/* <ResultsRow 
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
            />  */}
        </Layout>
    )
}

export default Homepage;
