import React from 'react';
import { IconContext } from 'react-icons';
import { BsFillStarFill } from "react-icons/bs";
import styled from 'styled-components';
import { HeadingOne, Label } from '../../typography/Typography';

const DetailsWrapper = styled.div`
    display: flex;
    flex-flow: column;
`;

const DetailsHeader = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    padding-right: ${props => props.theme.padding.paddingMedium};

    @media ${props => props.theme.breakpoints.tabletLarge} {
        padding-right: ${props => props.theme.padding.paddingSmall};
    }

    @media ${props => props.theme.breakpoints.phoneLarge} {
        padding-right: ${props => props.theme.padding.paddingMobile};
    }
`;

const HeaderTitle = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;
`;

const RateWrapper = styled.div`
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: flex-start;

    ${Label} {
        margin-right: 1.5rem;
    }
`;

const HeaderLabels = styled.ul`
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: flex-start;
`;

export const LabelWrapper = styled.li`
    position: relative;
    padding: 0 1.5rem;

    &:first-child {
        padding-left: 0;
    }

    &:last-child {
        padding-right: 0;
    }

    &:not(:last-child) {
        &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        height: 100%;
        width: 0.2rem;
        background-color: ${props => props.theme.colors.darkGray3};
        border-radius: 1.5rem;
        }
    }
`;

function Details({ data }) {

    console.log(data);
    const setMovieDuration = (min) => {
        const hours = Math.floor(min / 60);
        const minutes = min % 60;
        return `${hours}h ${minutes}min`;
    }

    const setNumberOfSeasons = (seasons) => {
        return seasons > 1 ? `${seasons} Seasons` : `${seasons} season`
    } 

    return (
        <DetailsWrapper>
            <DetailsHeader>
                <HeaderTitle>
                    <HeadingOne>{data.name ? data.name : data.title}</HeadingOne>
                    <RateWrapper>
                        <Label size='xLarge'>{data.vote_average}</Label>
                        <IconContext.Provider value={{size: '26px', color: '#FFBF00'}}>
                            <BsFillStarFill />
                        </IconContext.Provider>
                    </RateWrapper>
                </HeaderTitle>
                <HeaderLabels>
                    <LabelWrapper>
                        <Label uppercase='uppercase' weight='bold' color='darkGray3'>
                            {
                                data.media_type === 'movie' 
                                    ? data.release_date
                                    : data.first_air_date
                            }
                        </Label>
                    </LabelWrapper>
                    <LabelWrapper>
                        <Label weight='bold' color='darkGray3'>
                            {
                                data.media_type === 'movie' 
                                    ? setMovieDuration(data.runtime)
                                    : setNumberOfSeasons(data.number_of_seasons)
                            }
                        </Label>
                    </LabelWrapper>
                    <LabelWrapper>
                        <Label weight='bold' color='darkGray3'>{data.tagline}</Label>
                    </LabelWrapper>
                </HeaderLabels>
            </DetailsHeader>
        </DetailsWrapper>
    )
}

export default Details;
