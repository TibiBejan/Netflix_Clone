import React from 'react';
import styled from 'styled-components';
import Button from '../../core/Button';
import { HeadingTwo, Label } from '../../typography/Typography';
import NetflixMockup from '../../../assets/images/netflix-mockup.svg';

const FooterShowcaseWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    margin-bottom: ${props => props.theme.margin.marginXlarge};

    ${Label} {
        margin-bottom: 1.5rem;
    }

    ${HeadingTwo} {
        margin-bottom: 1.5rem;
    }
`;

const ShowcaseBackground = styled.div`
    position: relative;
    width: 100%;
    max-width: 80%;
    height: auto;
    
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to bottom, rgba(0,0,0, 0.9) 15%, rgba(0,0,0,0.4), rgba(0,0,0,0.1));
        z-index: 125;
    }

    & .background-image {
        pointer-events: none;
        user-select: none;
    }

    @media ${props => props.theme.breakpoints.phoneLarge} {
        max-width: 90%;
    }
`;

function FooterShowcase() {
    return (
        <FooterShowcaseWrapper>
            <Label>Netflix benefits</Label>
            <HeadingTwo textAlign="center">Up to 5 devices with unlimited users</HeadingTwo>
            <a href="https://www.netflix.com/ro-en/" target="_blank" rel="noreferrer">
                <Button btnStyle='solid' background='#E50914' color='#fafafa' text='Try Now' />
            </a>
            <ShowcaseBackground>
                <img src={NetflixMockup} alt="Netflix tablet mockup" className="background-image" />
            </ShowcaseBackground>
        </FooterShowcaseWrapper>
    )
}

export default FooterShowcase;
