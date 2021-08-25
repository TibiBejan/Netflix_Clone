import React from 'react';
import styled from 'styled-components';
import { IMAGE_BASE_URL } from '../../../constants/constants'
import MovieDbLogo from '../../../assets/images/tmdb-logo-long.svg';

const FooterLogoWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    margin-bottom: ${props => props.theme.margin.marginXlarge};

    @media ${props => props.theme.breakpoints.phoneLarge} {
        flex-flow: column;
    }
`;

const LogoWrapper = styled.div`
    height: 4rem;
    width: auto;

    &:not(:last-child) {
        margin-right: ${props => props.theme.margin.marginLarge};
    }

    &.background-image {
        user-select: none;
        pointer-events: none;
    }

    @media ${props => props.theme.breakpoints.tabletLarge} {
        height: 3rem;
    }

    @media ${props => props.theme.breakpoints.phoneLarge} {
        height: auto;
        max-width: 90%;

        &:first-child {
            display: none;
        }
    }
`;

function FooterLogo() {
    return (
        <FooterLogoWrapper>
            <LogoWrapper>
                <img src={`${IMAGE_BASE_URL}original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg`} alt="Netflix Company Logo" className="background-image" />
            </LogoWrapper>
            <LogoWrapper>
                <img src={MovieDbLogo} alt="The movie database Logo" className="background-image" />
            </LogoWrapper>
        </FooterLogoWrapper>
    )
}

export default FooterLogo;

