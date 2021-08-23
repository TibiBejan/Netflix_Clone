import React from 'react';
import styled from 'styled-components';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const MainWrapper = styled.main`
    width: 100%;
    display: flex;
    flex-flow: column;
    padding-top: ${props => props.theme.padding.paddingMedium};
    padding-left: ${props => props.theme.padding.paddingMedium};

    @media ${props => props.theme.breakpoints.tabletLarge} {
        padding-left: ${props => props.theme.padding.paddingSmall};
    }

    @media ${props => props.theme.breakpoints.phoneLarge} {
        padding-left: ${props => props.theme.padding.paddingMobile};
    }
`;

function Layout({ children }) {
    return (
        <>
            <Header />
            <MainWrapper>
                { children }    
            </MainWrapper>
            <Footer />   
        </>
    )
}

export default Layout;

