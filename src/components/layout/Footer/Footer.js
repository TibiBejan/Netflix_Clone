import React from 'react';
import FooterShowcase from './FooterShowcase';
import FooterLinks from './FooterLinks';
import FooterLogo from './FooterLogo';
import FooterPrivacy from './FooterPrivacy';
import { FOOTER_LINKS } from '../../../constants/constants';
import { FooterWrapper} from './FooterStyles';

function Footer() {
    return (
        <FooterWrapper>
            <FooterShowcase />
            <FooterLinks links={ FOOTER_LINKS }/>
            <FooterLogo />
            <FooterPrivacy />
        </FooterWrapper>
    )
}

export default Footer;
