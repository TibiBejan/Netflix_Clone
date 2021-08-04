import React from 'react';
import { IconContext } from 'react-icons';
import { BsSearch } from "react-icons/bs";
import NetflixLogo from '../../../assets/Netflix-Logo-White.png';
import { NavbarWrapper, NavbarActions, NavbarLogo, NavbarSearchBar, NavbarLinks, StyledLink, NavbarProfile } from './NavbarStyles';

function Navbar() {
    return (
        <NavbarWrapper>
            <NavbarActions>
                <NavbarLogo>
                    <img src={ NetflixLogo } alt="Netflix Company Logo" className="background-image" />
                </NavbarLogo>
                <NavbarSearchBar>
                    <label htmlFor="search" className="search-bar-label">
                        <IconContext.Provider value={{color: '#fafafa', size: '20px'}}>
                            <BsSearch />
                        </IconContext.Provider>
                    </label>
                    <input type="text" name="search" id="search" placeholder="Search" className="search-bar-input" />
                </NavbarSearchBar>
            </NavbarActions>
            <NavbarLinks>
                <li className="links-list-item">
                    <StyledLink to="/">Home</StyledLink>
                </li>
                <li className="links-list-item">
                    <StyledLink to="/tv-shows">Tv Shows</StyledLink>
                </li>
                <li className="links-list-item">
                    <StyledLink to="/movies">Movies</StyledLink>
                </li>
            </NavbarLinks>
            <NavbarProfile>
                <span className="profile-username">Profile</span>
                <div className="profile-image">
                    <img src="" alt="" className="background-image" />
                </div>
            </NavbarProfile>
        </NavbarWrapper>
    )
}

export default Navbar;
