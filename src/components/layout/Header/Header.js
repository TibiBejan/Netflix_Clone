import React from 'react';
import Navbar from '../../layout/Navbar/Navbar';
import Hero from '../Hero/Hero';

function Header() {
    return (
        <div className="page-header">
            <Navbar />
            <Hero />
        </div>
    )
}

export default Header;
