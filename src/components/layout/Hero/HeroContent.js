import React from 'react';
import styled from 'styled-components';
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
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: flex-start;
  column-gap: ${props => props.theme.margin.marginSmall};
  margin-bottom: ${props => props.theme.margin.marginSmall};
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

export default HeroContent;
