import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';

const ContentWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    display: grid;
    grid-auto-columns: 100%;
    grid-auto-rows: max-content;
    padding-top: 12.5rem;
`;


function Discover() {
    const { search } = useLocation();
    const param = new URLSearchParams(search);
    const searchedTerm = param.get('actorId');
    console.log(searchedTerm)

    return (
        <Layout isShowcase={ false }>
            <ContentWrapper>
                <h1>Discover</h1>
                {search}
            </ContentWrapper>
        </Layout>
    )
}

export default Discover;
