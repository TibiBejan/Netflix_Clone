import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Label } from '../../typography/Typography';

const NavbarLogoWrapper = styled.div`
    display: flex;
    flex-flow: row;
    align-items: flex-end;
    justify-content: flex-start;
`;

const NavbarLogo = styled(Link).attrs(() => ({
    to: '/'
}))`
    position: relative;
    height: 5.5rem;
    width: 12.5rem;
    margin-right: ${props => props.theme.margin.marginSmall};

    & .background-image {
        position: absolute;
        top: 50%;
        left: 0;
        height: auto;
        transform: translateY(-50%);
    }
`;
const NavbarDateWrapper = styled.div`
    position: relative;
    height: 5.5rem;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: flex-start;
    padding-left: ${props => props.theme.padding.paddingMobile};

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        height: 45%;
        width: 0.2rem;
        background-color: ${props => props.theme.colors.white};
        border-radius: 2rem;
    }

    ${Label}:not(:last-child) {
        margin-right: 1rem;
    }
`;

function LogoWrapper() {

    const [ currentDate, setCurrentDate ] = useState(new Date());
    const DAYS_IN_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = DAYS_IN_WEEK[currentDate.getDay() - 1]

    useEffect(() => {
        setInterval(() => setCurrentDate(new Date()), 30000);
    }, [])

    return (
        <NavbarLogoWrapper>
            <NavbarLogo>
                <img src='https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg' alt="Netflix Company Logo" className="background-image" />
            </NavbarLogo>
            <NavbarDateWrapper>
                <Label size='small'>{ currentDay }, {
                    currentDate.toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                    })
                }</Label>
            </NavbarDateWrapper>
        </NavbarLogoWrapper>
    )
}

export default LogoWrapper;
