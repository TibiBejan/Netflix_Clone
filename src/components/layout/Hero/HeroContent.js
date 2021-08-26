import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { AiFillPlayCircle } from "react-icons/ai";
import { Paragraph } from '../../typography/Typography';
import Button from '../../core/Button';

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: ${props => props.theme.margin.marginSmall};

  ${Paragraph} {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
    text-shadow: 0.1rem 0.1rem 0.1rem rgba(0,0,0,0.6);
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: flex-start;
  column-gap: ${props => props.theme.margin.marginSmall};
  
  @media ${props => props.theme.breakpoints.tabletLarge} {
    margin-bottom: ${props => props.theme.margin.marginMedium};
  }
`;

function HeroContent({ data }) {
    return (
        <>
            <DescriptionWrapper>
                <Paragraph color='darkGray3'>{data.overview}</Paragraph>
            </DescriptionWrapper>

            <ActionsWrapper>
                <Button btnStyle='solid' background='#E50914' color='#fafafa' text='Stream Now'>
                    <IconContext.Provider value={{color: '#fafafa', size: '22px'}}>
                        <AiFillPlayCircle />
                    </IconContext.Provider>
                </Button>
                <Button btnStyle='outline' text='All Episodes' />
            </ActionsWrapper>
        </>
    )
}

HeroContent.propTypes = {
    data: PropTypes.object,
}

export default HeroContent;
