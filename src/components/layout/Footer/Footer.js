import React from 'react';
import { HeadingTwo, Label } from '../../typography/Typography';
import Button from '../../core/Button';
import NetflixMockup from '../../../assets/images/Untitled.svg';
import { FooterWrapper, FooterShowcase, ShowcaseBackground } from './FooterStyles';

function Footer() {
    return (
        <FooterWrapper>
            <FooterShowcase>
                <Label>Netflix benefits</Label>
                <HeadingTwo textAlign="center">Up to 5 devices with unlimited users</HeadingTwo>
                <a href="https://www.netflix.com/ro-en/" target="_blank" rel="noreferrer">
                    <Button btnStyle='solid' background='#E50914' color='#fafafa' text='Try Now' />
                </a>
                <ShowcaseBackground>
                    <img src={NetflixMockup} alt="Netflix tablet mockup" className="background-image" />
                </ShowcaseBackground>
            </FooterShowcase>
        </FooterWrapper>
    )
}

export default Footer;
