import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { BsFillStarFill } from 'react-icons/bs';
import setMovieDuration from '../../utils/MovieDurationUtil';
import setSeasonsLength from '../../utils/SeasonsLengthUtil';
import { HeadingOne, Label } from '../typography/Typography';
import { DetailsHeaderWrapper, HeaderTitle, RatingWrapper, HeaderLabels, LabelWrapper } from './DetailsHeaderStyles';

function DetailsHeader({ data }) {
    return (
        <DetailsHeaderWrapper>
            <HeaderTitle>
                <HeadingOne>{data.details.name ? data.details.name : data.details.title}</HeadingOne>
                <RatingWrapper>
                    <Label size='xLarge'>{data.details.vote_average}</Label>
                    <IconContext.Provider value={{size: '26px', color: '#FFBF00'}}>
                        <BsFillStarFill />
                    </IconContext.Provider>
                </RatingWrapper>
            </HeaderTitle>
            <HeaderLabels>
                <LabelWrapper>
                    <Label uppercase='uppercase' weight='bold' color='darkGray3'>
                        {
                            data.media_type === 'movie' 
                                ? data.details.release_date
                                : data.details.first_air_date
                        }
                    </Label>
                </LabelWrapper>
                <LabelWrapper>
                    <Label weight='bold' color='darkGray3'>
                        {
                            data.media_type === 'movie' 
                                ? setMovieDuration(data.details.runtime)
                                : setSeasonsLength(data.details.number_of_seasons)
                        }
                    </Label>
                </LabelWrapper>
                <LabelWrapper>
                    <Label weight='bold' color='darkGray3'>{data.details.tagline ? data.details.tagline : data.details.status}</Label>
                </LabelWrapper>
            </HeaderLabels>
        </DetailsHeaderWrapper>
    )
}

DetailsHeader.propTypes = {
    data: PropTypes.object
}

export default DetailsHeader;
