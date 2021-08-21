import React from 'react';
import PropTypes from 'prop-types';
import useHover from '../../../hooks/useHover';
import { IconContext } from 'react-icons';
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { ShowcaseCardWrapper, ShowcaseShadow, ShowcaseCardBackground, BackgroundCircle, ShowcaseCardContent, ContentLabels, ContentLabel, ContentDescription } from './ShowcaseCardStyles';
import { HeadingThree, Label, Paragraph } from '../../typography/Typography';

function ShowcaseCard({ data }) {

    const [ ref, hoverValue ] = useHover();

    return (
        <ShowcaseCardWrapper ref={ref}>
            <ShowcaseShadow />
            <ShowcaseCardBackground isHovered={hoverValue}>
                <img src={
                    data.backdrop_path 
                    ? `https://image.tmdb.org/t/p/original/${data.backdrop_path }` 
                    : `https://image.tmdb.org/t/p/original/${data.poster_path}`
                } alt={data.name ? data.name : data.title} className="background-image" />
                <BackgroundCircle>
                    <svg viewBox="-173 -173 346 346" width="346" height="346">
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" d="M0,-123 C69.188,-123 123,-69.187 123,0 C123,69.188 69.188,123 0,123 C-69.187,123 -123,69.188 -123,0 C-123,-69.187 -69.187,-123 0,-123 " 
                            fill="none" 
                            stroke="rgb(0, 0, 0, 1)"
                            strokeWidth="100">
                        </path>
                    </svg>
                </BackgroundCircle>
            </ShowcaseCardBackground>
            <ShowcaseCardContent>
                <ContentLabels>
                    <ContentLabel>
                        <IconContext.Provider value={{color: '#fff', size: '22px'}}>
                            <AiFillHeart />
                        </IconContext.Provider>
                        <Label>{Math.floor(data.popularity)}</Label>
                    </ContentLabel>
                    <ContentLabel>
                        <IconContext.Provider value={{color: '#fff', size: '24px'}}>
                            <AiFillStar />
                        </IconContext.Provider>
                        <Label>{data.vote_average}</Label>
                    </ContentLabel>
                </ContentLabels>
                <HeadingThree textAlign='center'>{data.original_title ? data.original_title : data.title}</HeadingThree>
                <ContentDescription>
                    <Paragraph>{data.overview}</Paragraph>
                </ContentDescription>
            </ShowcaseCardContent>
        </ShowcaseCardWrapper>
    )
}

ShowcaseCard.propTypes = {
    data: PropTypes.object
}

export default ShowcaseCard;
