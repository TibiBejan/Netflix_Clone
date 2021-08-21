import React from 'react';
import PropTypes from 'prop-types';
import useHover from '../../../hooks/useHover';
import { Label } from '../../typography/Typography';
import { ResultCard, ResultCardShowcase, ResultCardDescription } from './PreviewCardStyles';

function PreviewCard({ data }) {

    const [hoverRef, isHovered] = useHover();

    return (
        <ResultCard ref={hoverRef}>
            <ResultCardShowcase isHovered={isHovered} >
                <img src={
                    data.backdrop_path 
                    ? `https://image.tmdb.org/t/p/original/${data.backdrop_path }` 
                    : `https://image.tmdb.org/t/p/original/${data.poster_path}`
                } alt={data.name} className="background-image" />
            </ResultCardShowcase>
            <ResultCardDescription>
                <Label weight='bold' shadow >{data.name ? data.name : data.title}</Label>
                <Label weight='bold' color='darkGray3'>{data.vote_average}</Label>
            </ResultCardDescription>
        </ResultCard>
    )
}

PreviewCard.propTypes = {
    data: PropTypes.object,
}

export default PreviewCard;
