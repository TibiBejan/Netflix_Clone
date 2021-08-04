import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavbarWrapper = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 10rem;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${props => props.theme.padding.paddingSmall};
`;

export const NavbarActions = styled.div`
    height: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: flex-start;
`;

export const NavbarLogo = styled.div`
    position: relative;
    height: 100%;
    width: 12.5rem;
    margin-right: ${props => props.theme.margin.marginMedium};

    & .background-image {
        position: absolute;
        top: 50%;
        left: 0;
        height: auto;
        transform: translateY(-50%);
    }
`;

export const NavbarSearchBar = styled.div`
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: flex-start;

    & .search-bar-label {
        margin-right: ${props => props.theme.margin.marginSmall}
    }

    & .search-bar-input {
        width: 10rem;
        background-color: transparent;
        border: none;
        outline: none;
        padding: 1.5rem 0;
        font-size: ${props => props.theme.fontSizes.paragraphAndLinks};
        font-weight: 500;
        color: ${props => props.theme.colors.lightGray1};

        &::placeholder {
            font-size: ${props => props.theme.fontSizes.paragraphAndLinks};
            font-weight: 500;
            letter-spacing: 0.1rem;
            text-transform: uppercase;
            color: ${props => props.theme.colors.darkGray3};
            text-shadow: 0.1rem 0.1rem 0.1rem rgba(0,0,0,0.6);
        }
    }
`;

export const NavbarLinks = styled.ul`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;

    & .links-list-item {
        height: 100%;
        display: flex;
        align-items: center;

        &:not(:last-child) {
            margin-right: ${props => props.theme.margin.marginMedium};
        }
    }
`;

export const StyledLink = styled(NavLink).attrs(props => ({
    activeStyle: {color: props.theme.colors.lightGray1},
    exact: true
}))`
    font-size: ${props => props.theme.fontSizes.paragraphAndLinks};
    font-weight: 500;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    color: ${props => props.theme.colors.darkGray3};
`;

export const NavbarProfile = styled.div`
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;

    & .profile-username {
        margin-right: ${props => props.theme.margin.marginSmall};
        font-size: ${props => props.theme.fontSizes.paragraphAndLinks};
        font-weight: 500;
        letter-spacing: 0.1rem;
        text-transform: uppercase;
        color: ${props => props.theme.colors.lightGray1};
    }

    & .profile-image {
        position: relative;
        width: 5rem;
        height: 5rem;
        background-color: ${props => props.theme.colors.darkRed};

        & .background-image {
            position: absolute;
            top: 0;
            left: 0;
        }
    }
`;