import React from 'react';
import PropTypes from 'prop-types';
import useHover from '../../../hooks/useHover';
import { Label } from '../../typography/Typography';
import { OriginalsCardWrapper, OriginalsCardInner } from './OriginalsCardStyles';

function OriginalsCard({ data }) {

    const [hoverRef, isHovered] = useHover();

    return (
        <OriginalsCardWrapper ref={hoverRef} isHovered={isHovered}>
            <OriginalsCardInner>
                <img src={
                    data.poster_path 
                    ? `https://image.tmdb.org/t/p/original/${data.poster_path}` 
                    : `https://image.tmdb.org/t/p/original/${data.backdrop_path}`
                } alt={data.title ? data.title : data.name} className="background-image" />
            </OriginalsCardInner>
        </OriginalsCardWrapper>
    )
}

OriginalsCard.propTypes = {
    data: PropTypes.object,
}

export default OriginalsCard;
