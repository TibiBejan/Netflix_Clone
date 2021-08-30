import React,{ useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import ActionsWrapper from './ActionsWrapper';
import LogoWrapper from './LogoWrapper';

export const NavbarWrapper = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 12.5rem;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0 ${props => props.theme.padding.paddingMedium};
    transition: all 0.35s ease-in-out;
    z-index: 250;

    ${props => props.sticky && css`
        height: 9rem;
        background-color: rgba(0,0,0,0.95);
    `}

    @media ${props => props.theme.breakpoints.tabletLarge} {
        padding: 0 ${props => props.theme.padding.paddingSmall};
    }

    @media ${props => props.theme.breakpoints.phoneLarge} {
        padding: 0 ${props => props.theme.padding.paddingMobile};
    }
`;

function Navbar() {

    const [ scrollPos, setScrollPos ] = useState(0);

    useEffect(() => {
        const watchScrollPos = () => {
            setScrollPos(window.scrollY);
        }

        window.addEventListener('scroll', watchScrollPos);
        return () => {
            window.removeEventListener('scroll', watchScrollPos);
        }
    }, []);

    return (
        <NavbarWrapper sticky={ scrollPos > 0 }>
            <LogoWrapper />
            <ActionsWrapper />
        </NavbarWrapper>
    )
}

export default Navbar;
