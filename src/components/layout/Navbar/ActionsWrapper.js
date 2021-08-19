import React, { useState } from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FaSearch, FaCaretDown, FaCaretUp } from "react-icons/fa";
import { Label } from '../../typography/Typography';

const NavbarActions = styled.div`
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: flex-start;
    column-gap: 2.5rem;
`;

const MenuTogglerLine = styled.div`
    width: 2.25rem;
    height: 0.3rem;
    background-color: ${props => props.theme.colors.white};

    &:not(:last-child) {
        margin-bottom: 0.65rem;
    }
`;

const MenuTogglerButton = styled.div`
    display: flex;
    flex-flow: column;
    align-items: flex-end;
    justify-content: center;
    cursor: pointer;

    ${MenuTogglerLine}:last-child {
        width: 3.25rem
    }
`;

const ProfileButtonWrapper = styled.div`
    position: relative;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    column-gap: 1.5rem;
    cursor: pointer;

    @media ${props => props.theme.breakpoints.tabletLarge} {
        display: none;
    }
`;

const ProfilePicture = styled.div`
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.red};
    overflow: hidden;
`;

const DropdownWrapper = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    width: 20rem;
    height: 15rem;
    padding-top: 2rem;
    cursor: auto;
`;

const DropdownInner = styled.ul`
    position: relative;
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    padding: 2.5rem 0;
    background-image: linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.85));
    border: 0.1rem solid ${props => props.theme.colors.darkGray3};
`;

const DropdownEl = styled.li`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem 0;

    ${Label} {
        position: relative;
        padding-bottom: 0.5rem;

        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 0.15rem;
            background-color: ${props => props.theme.colors.white};
            transform: scaleX(0);
            transform-origin: left;
            will-change: transform;
            transition: transform 0.35s ease-in-out;
        }

        &:hover {
            &::after {
                transform: scaleX(1);
            }
        }
    }
`;

function ActionsWrapper() {

    const [ isHovered, setIsHovered ] = useState(false);

    return (
        <NavbarActions>
            <button type="button">
                <IconContext.Provider value={{color: '#fff', size: '20px'}}>
                    <FaSearch />
                </IconContext.Provider>
            </button>
            <MenuTogglerButton>
                <MenuTogglerLine />
                <MenuTogglerLine />
            </MenuTogglerButton>
            <ProfileButtonWrapper 
                onMouseEnter={() => setIsHovered(prevState => !prevState)}
                onMouseLeave={() => setIsHovered(prevState => !prevState)}
            >
                <IconContext.Provider value={{color: '#fff', size: '26px'}}>
                    { isHovered ? <FaCaretUp /> : <FaCaretDown /> }
                </IconContext.Provider>
                <ProfilePicture>
                    {/* <img src="" alt="" className="background-image" /> */}
                </ProfilePicture>
                {isHovered && 
                    <DropdownWrapper>
                        <DropdownInner>
                            <DropdownEl>
                                <Label>Profile</Label>
                            </DropdownEl>
                            <DropdownEl>
                                <Label>My List</Label>
                            </DropdownEl>
                            <DropdownEl>
                                <Label>Log out</Label>
                            </DropdownEl>
                        </DropdownInner>
                    </DropdownWrapper>
                }
                
            </ProfileButtonWrapper>
        </NavbarActions>
    )
}

export default ActionsWrapper;

