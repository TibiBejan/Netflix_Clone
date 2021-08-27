import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { IMAGE_BASE_URL } from '../../constants/constants'

const PosterWrapper = styled.div`
    position: relative;
    background-color: ${props => props.theme.colors.darkGray1};
    display: flex;
    align-items: center;
    justify-content: center;
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
    return (
        <PosterWrapper>
            <PosterImage 
                src={data.poster_path 
                    ? `${IMAGE_BASE_URL}original${data.poster_path}`
                    : `${IMAGE_BASE_URL}original${data.backdrop_path}`
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