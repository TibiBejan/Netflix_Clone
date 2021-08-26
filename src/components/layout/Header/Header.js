import React from 'react';
import PropTypes from 'prop-types'
import Navbar from '../../layout/Navbar/Navbar';
import Hero from '../Hero/Hero';

function Header({ isShowcase }) {
    return (
        <div className="page-header">
            <Navbar />
            { isShowcase && <Hero /> }
        </div>
    )
}

Header.propTypes = {
    isShowcase: PropTypes.bool
}

export default Header;
