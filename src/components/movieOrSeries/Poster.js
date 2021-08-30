import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { IMAGE_BASE_URL } from '../../constants/constants'
import useWindowSize from '../../hooks/useWindowSize';

const PosterWrapper = styled.div`
    position: relative;
    background-color: ${props => props.theme.colors.darkGray1};
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${props => props.theme.breakpoints.utilityDesktop} {
        width: calc(100% - ${props => props.theme.padding.paddingMedium});
    }

    @media ${props => props.theme.breakpoints.tabletLarge} {
        width: calc(100% - ${props => props.theme.padding.paddingSmall});
    }

    @media ${props => props.theme.breakpoints.phoneLarge} {
        width: calc(100% - ${props => props.theme.padding.paddingMobile});
    }
`;

const PosterImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
`;

function Poster({ data }) {

    const { width: windowWidth } = useWindowSize();

    return (
        <PosterWrapper>
            <PosterImage 
                src={
                    windowWidth >= 1500
                        ? data.poster_path 
                            ? `${IMAGE_BASE_URL}original${data.poster_path}`
                            : `${IMAGE_BASE_URL}original${data.backdrop_path}`
                        : data.backdrop_path 
                            ? `${IMAGE_BASE_URL}original${data.backdrop_path}`
                            : `${IMAGE_BASE_URL}original${data.poster_path}`
                }
                alt={data.name ? data.name : data.title} 
            />
        </PosterWrapper>
    )
}

Poster.propTypes = {
    data: PropTypes.object
}

export default Poster;