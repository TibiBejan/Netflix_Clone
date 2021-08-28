import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import useHover from '../../../hooks/useHover';
import setMovieDuration from '../../../utils/MovieDurationUtil';
import setSeasonsLength from '../../../utils/SeasonsLengthUtil';
import { IconContext } from 'react-icons';
import { BsPlus } from "react-icons/bs";
import { HeadingThree, Label, Paragraph } from '../../typography/Typography';

import { SimilarCardWrapper, CardShowcase, ShowcaseMeta, CardContent, CardContentHeader, LabelsWrapper, StyledButton, CardContentBody, ParagraphWrapper } from './SimilarCardStyles';


function SimilarCard({ data, scrollPosition }) {

    const [hoverRef, isHovered] = useHover();

    return (
        <Link to={`/browse/${data.name ? data.name : data.title}`}>
            <SimilarCardWrapper ref={hoverRef}>
                <CardShowcase isHovered={isHovered}>
                    <LazyLoadImage 
                        src={
                            data.backdrop_path 
                                ? `https://image.tmdb.org/t/p/w780/${data.backdrop_path}` 
                                : `https://image.tmdb.org/t/p/w92/${data.poster_path}`
                        }
                        alt={data.name}
                        scrollPosition={scrollPosition}
                        className="background-image"
                    />
                    <ShowcaseMeta>
                        <Label size='large' weight='bold' color='white' shadow>
                            {
                                data.runtime
                                    ? setMovieDuration(data.runtime) 
                                    : setSeasonsLength(data.number_of_seasons)
                            }
                        </Label>
                    </ShowcaseMeta>
                </CardShowcase>
                <CardContent>
                    <CardContentHeader>
                        <LabelsWrapper>
                            <Label size='small' weight='bold' color='lightColor2'>
                                { data.release_date ? data.release_date : data.first_air_date}
                            </Label>
                            <Label size='small' weight='bold' color='lightColor2'>
                                {
                                    data.genres.map(genre => genre.name).slice(0, 1)
                                }
                            </Label>
                        </LabelsWrapper>
                        <StyledButton>
                            <IconContext.Provider value={{color: '#fff', size: '22px'}}>
                                <BsPlus />
                            </IconContext.Provider>
                            <Label size='small' weight='bold' color='white' uppercase="uppercase">Watchlist</Label>
                        </StyledButton>
                    </CardContentHeader>    
                    <CardContentBody>
                        <HeadingThree>{data.title ? data.title : data.name}</HeadingThree>
                        <ParagraphWrapper>
                            <Paragraph>{data.overview}</Paragraph>
                        </ParagraphWrapper>
                    </CardContentBody>   
                </CardContent>
            </SimilarCardWrapper>
        </Link>
    )
}

SimilarCard.propTypes = {
    data: PropTypes.object,
    scrollPosition: PropTypes.object
}

export default SimilarCard;

