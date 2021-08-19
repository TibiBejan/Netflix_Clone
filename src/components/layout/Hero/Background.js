import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeroBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.black};
    z-index: 110;
    user-select: none;
    pointer-events: none;
`;

const HeroBackgroundInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    & .background-image {
        object-position: center top;
    }
`;

const HeroBackgroundOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, rgba(0,0,0,0.99) 10%, rgba(0,0,0,0.9) 40%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.15) 80%),
                        linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.99) 92.5%);
    z-index: 115;

    @media ${props => props.theme.breakpoints.desktopSmall} {
        background-image: linear-gradient(to right, rgba(0,0,0,0.99) 20%, rgba(0,0,0,0.9) 40%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.15) 90%),
                        linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.99) 92.5%);
    }
`;

function Background({ backdrop_path, poster_path, title }) {
    return (
        <HeroBackground>
            <HeroBackgroundInner>
                <img 
                    src={ backdrop_path 
                        ? `https://image.tmdb.org/t/p/original/${backdrop_path}` 
                        : `https://image.tmdb.org/t/p/original/${poster_path}`
                    } 
                    alt={ title } 
                    className="background-image" 
                />
                <HeroBackgroundOverlay />
            </HeroBackgroundInner>
        </HeroBackground>
    )
}

Background.propTypes = {
    backdrop_path: PropTypes.string,
    poster_path: PropTypes.string,
    title: PropTypes.string,
}

export default Background
