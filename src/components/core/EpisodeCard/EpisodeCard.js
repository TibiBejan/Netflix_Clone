import React from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import useHover from '../../../hooks/useHover';
import { HeadingThree, Label, Paragraph } from '../../typography/Typography';
import { EpisodeCardWrapper, CardShowcase, CardLogoWrapper, CardContent, CardContentPreview, CardContentHeader, LabelsWrapper, RatingWrapper, CardContentBody, ParagraphWrapper } from './EpisodeCardStyles';
import { IconContext } from 'react-icons';
import { BsFillStarFill } from 'react-icons/bs';


function EpisodeCard({ data, scrollPosition }) {

    const [hoverRef, isHovered] = useHover();

    return (
        <EpisodeCardWrapper ref={hoverRef}>
            <CardShowcase isHovered={isHovered}>
                {data.still_path && (
                    <LazyLoadImage 
                        src={`https://image.tmdb.org/t/p/w780/${data.still_path}`}
                        alt={data.name}
                        scrollPosition={scrollPosition}
                        className="background-image"
                    />
                )}
                {!data.still_path && (
                    <CardLogoWrapper>
                        <LazyLoadImage 
                            src='https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg'
                            alt='Netflix Logo'
                            scrollPosition={scrollPosition}
                            className="background-image"
                        />
                    </CardLogoWrapper>
                )}
            </CardShowcase>
            <CardContent>
                {(Math.floor(data.vote_average) === 0) && (
                    <CardContentPreview>
                        <Label size='large' weight='bold' color='lightColor1'>{data.air_date}</Label>
                        <HeadingThree>{data.name}</HeadingThree>
                        <Paragraph>Unreleased</Paragraph>
                    </CardContentPreview>
                )}
                {(Math.floor(data.vote_average) !== 0) && (
                    <>
                        <CardContentHeader>
                            <LabelsWrapper>
                                <Label size='small' weight='bold' color='lightColor1'>{data.air_date}</Label>
                                <RatingWrapper>
                                    <Label size='small' weight='bold' color='lightColor1'>{data.vote_average.toFixed(1)}</Label>
                                    <IconContext.Provider value={{size: '16px', color: '#FFBF00'}}>
                                        <BsFillStarFill />
                                    </IconContext.Provider>
                                </RatingWrapper>
                            </LabelsWrapper>
                        </CardContentHeader>
                        <CardContentBody>
                            <HeadingThree>{data.name}</HeadingThree>
                            <ParagraphWrapper>
                                <Paragraph>{data.overview}</Paragraph>
                            </ParagraphWrapper>
                        </CardContentBody>
                    </>
                )}
            </CardContent>
        </EpisodeCardWrapper>
    )
}

EpisodeCard.propTypes = {
    data: PropTypes.object,
    scrollPosition: PropTypes.object
}

export default EpisodeCard;
