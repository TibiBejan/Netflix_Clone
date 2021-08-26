import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const MainWrapper = styled.main`
    width: 100%;
    /* padding-top: 12.5rem; */
    padding-left: ${props => props.theme.padding.paddingMedium};

    @media ${props => props.theme.breakpoints.tabletLarge} {
        padding-left: ${props => props.theme.padding.paddingSmall};
    }

    @media ${props => props.theme.breakpoints.phoneLarge} {
        padding-left: ${props => props.theme.padding.paddingMobile};
    }
`;

function Layout({ children, isShowcase }) {
    return (
        <>
            <Header isShowcase={ isShowcase }/>
            <MainWrapper>
                { children }    
            </MainWrapper>
            <Footer isShowcase={ isShowcase }/>   
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    isShowcase: PropTypes.bool,
}

export default Layout;

