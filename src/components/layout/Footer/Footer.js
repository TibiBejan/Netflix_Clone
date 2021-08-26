import React from 'react';
import PropTypes from 'prop-types'
import FooterShowcase from './FooterShowcase';
import FooterLinks from './FooterLinks';
import FooterLogo from './FooterLogo';
import FooterPrivacy from './FooterPrivacy';
import { FOOTER_LINKS } from '../../../constants/constants';
import { FooterWrapper} from './FooterStyles';

function Footer({ isShowcase }) {
    return (
        <FooterWrapper>
            { isShowcase && <FooterShowcase /> }
            <FooterLinks links={ FOOTER_LINKS }/>
            <FooterLogo />
            <FooterPrivacy />
        </FooterWrapper>
    )
}

Footer.propTypes = {
    isShowcase: PropTypes.bool
}

export default Footer;
