import React from 'react';
import styled from 'styled-components';
import requests from '../api/Requests';
import Layout from '../components/layout/Layout';
import ResultsRow from '../components/layout/ResultsRow/ResultsRow';
import ActorsRow from '../components/layout/ActorsRow/ActorsRow';

const ContentWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    display: grid;
    grid-auto-columns: 100%;
    grid-auto-rows: max-content;
    padding-top: 12.5rem;
`;

function Movies() {
    return (
        <Layout 
            heroType="movies"
            isShowcase
        >
            <ContentWrapper>
                {
                    requests.movies.categories.map((category, index) => (
                        <ResultsRow 
                            key={`${category.title}${index}`}
                            title={category.title} 
                            reqLinks={category.endpoint} 
                            resultsLength={category.resultsLength}
                            cardType={category.cardType}
                        />
                    ))
                }
                <ActorsRow order={11}/>
            </ContentWrapper>
        </Layout>
    )
}

export default Movies;
