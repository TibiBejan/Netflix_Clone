import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { HeadingOne, Label } from '../../typography/Typography';

export const GenresWrapper = styled.ul`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: ${props => props.theme.margin.marginSmall};
`;

export const GenreListItem = styled.li`
  position: relative;
  padding: 0 1.5rem;

  &:first-child {
    padding-left: 0;
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
      background-color: ${props => props.theme.colors.lightGray1};
      border-radius: 1.5rem;
    }
  }

  @media ${props => props.theme.breakpoints.phoneLarge} {
    ${Label} {
      font-size: 1rem;
    }
  }
`;

export const InfoWrapper = styled.ul`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: ${props => props.theme.margin.marginSmall};
`;

export const InfoWrapperItem = styled.li`
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
      background-color: ${props => props.theme.colors.lightGray1};
      border-radius: 1.5rem;
    }
  }
`;

function HeroHeader({ data }) {
    return (
        <>
            <GenresWrapper>
                {data.genres.map(genre => (
                    <GenreListItem key={genre.id}>
                        <Label uppercase='uppercase' weight='bold'>{genre.name}</Label>
                    </GenreListItem>
                ))}
            </GenresWrapper>

            <HeadingOne>{data.name}</HeadingOne>

            <InfoWrapper>
                <InfoWrapperItem>
                    <Label uppercase='uppercase' weight='bold'>
                      {
                        data.heroType === "movies" 
                          ? data.release_date.split('-')[0]
                          : data.first_air_date.split('-')[0]
                      }
                    </Label>
                </InfoWrapperItem>
                <InfoWrapperItem>
                    <Label uppercase='uppercase' weight='bold'>Director:
                        <Label weight='bold' color='darkGray3' shadow>&nbsp;&nbsp;
                          {
                            data.heroType === "movies" 
                              ? data.production_companies[0].name
                              : data.networks[0].name
                          }
                        </Label>
                    </Label>
                </InfoWrapperItem>
                <InfoWrapperItem>
                    <Label uppercase='uppercase' weight='bold'>{data.heroType === "movies" ? "Duration:" : "Seasons:"}
                        <Label weight='bold' color='darkGray3' shadow>&nbsp;&nbsp;
                          {
                            data.heroType === "movies" 
                              ? `${data.runtime} Minutes`
                              : `${data.number_of_seasons} - ${data.number_of_episodes} Episodes`
                          }
                        </Label>
                    </Label>
                </InfoWrapperItem>
            </InfoWrapper>   
        </>
    )
}

HeroHeader.propTypes = {
  data: PropTypes.object,
}

export default HeroHeader;
