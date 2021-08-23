import React from 'react';
import requests from '../api/Requests';
import ActorsRow from '../components/layout/ActorsRow/ActorsRow';
import Layout from '../components/layout/Layout';
import ResultsRow from '../components/layout/ResultsRow/ResultsRow';

function Homepage() {

    const requestsObj = requests.tv.categories.map(tvCategory => {
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
    }).filter(request => request.endpoints !== null);

    return (
        <Layout>
            {requestsObj.map((requestObj, index) => (
                <ResultsRow 
                    key={`${requestObj}${index}`}
                    title={requestObj.title} 
                    reqLinks={requestObj.endpoints} 
                    resultsLength={requestObj.resultsLength}
                    cardType={requestObj.cardType}
                />
            ))}
            <ActorsRow order={11}/>
        </Layout>
    )
}

export default Homepage;
