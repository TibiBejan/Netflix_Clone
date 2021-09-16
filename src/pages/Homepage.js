import React from 'react';
import styled from 'styled-components';
import requests from '../api/Requests';
import ActorsRow from '../components/layout/ActorsRow/ActorsRow';
import Layout from '../components/layout/Layout';
import MoodRow from '../components/layout/MoodRow/MoodRow';
import ResultsRow from '../components/layout/ResultsRow/ResultsRow';

const ContentWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    display: grid;
    grid-auto-columns: 100%;
    grid-auto-rows: max-content;
    padding-top: 12.5rem;
`;

function Homepage() {
    const requestsObj = requests.tv.categories.map(tvCategory => {
        return requests.movies.categories.reduce((acc, obj) => {
            if(tvCategory.title === obj.title) {
                acc.title = obj.title;
                acc.endpoints = [tvCategory.endpoint, obj.endpoint].flat();
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
        <Layout 
            heroType="series"
            isShowcase
        >
            <ContentWrapper>
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
                <MoodRow/>
            </ContentWrapper>
        </Layout>
    )
}

export default Homepage;
