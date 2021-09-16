import React from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import useHover from '../../../hooks/useHover';
import { Label } from '../../typography/Typography';
import { ResultCard, ResultCardShowcase, ResultCardDescription } from './PreviewCardStyles';
import { Link } from 'react-router-dom';

function PreviewCard({ data, scrollPosition, cardType }) {

    const [hoverRef, isHovered] = useHover();

    return (
        <Link to={`/browse/${data.name ? encodeURIComponent(data.name) : encodeURIComponent(data.title)}`}>
            <ResultCard ref={hoverRef}>
                <ResultCardShowcase isHovered={isHovered} cardType={cardType}>
                    <LazyLoadImage 
                        src={
                            cardType === 'tall' 
                                ? data.poster_path
                                    ? `https://image.tmdb.org/t/p/w780/${data.poster_path}` 
                                    : `https://image.tmdb.org/t/p/w92/${data.backdrop_path}`
                                : data.backdrop_path 
                                    ? `https://image.tmdb.org/t/p/w780/${data.backdrop_path}` 
                                    : `https://image.tmdb.org/t/p/w92/${data.poster_path}`
                        }
                        alt={data.name}
                        scrollPosition={scrollPosition}
                        className="background-image"
                    />
                </ResultCardShowcase>
                <ResultCardDescription>
                    <Label weight='bold' shadow >{data.name ? data.name : data.title}</Label>
                    <Label weight='bold' color='darkGray3'>{data.vote_average.toFixed(1)}</Label>
                </ResultCardDescription>
            </ResultCard>
        </Link>
    )
}

PreviewCard.propTypes = {
    data: PropTypes.object,
    scrollPosition: PropTypes.object
}

export default PreviewCard;
