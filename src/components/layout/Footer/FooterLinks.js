import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Label } from '../../typography/Typography';

const FooterLinksWrapper = styled.div`
    width: 100%;
    max-width: 70%;
    display: grid;
    grid-template-columns: repeat(4, max-content);
    justify-content: space-between;
    row-gap: 7.5rem;
    margin: 0 auto;
    margin-bottom: ${props => props.theme.margin.marginXlarge};

    @media ${props => props.theme.breakpoints.desktopSmall} {
        max-width: 100%;
        justify-content: center;
        column-gap: 15rem;
    }

    @media ${props => props.theme.breakpoints.tabletLarge} {
       grid-template-columns: repeat(2, max-content);
       column-gap: 15rem;
    }

    @media ${props => props.theme.breakpoints.tablet} {
        column-gap: 10rem;
    }

    @media ${props => props.theme.breakpoints.phone} {
        column-gap: 7.5rem;
    }
`;

const FooterColLinks = styled.ul`
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: flex-start;

    @media ${props => props.theme.breakpoints.tabletLarge} {
        align-items: center;
    }
`;

const ColLink = styled.li`
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.2rem;
        background-color: ${props => props.theme.colors.white};
        transform: scaleX(0);
        transform-origin: left;
        transition: 0.35s cubic-bezier(0.39, 0.575, 0.565, 1);
    }

    ${Label} {
        cursor: pointer;
    }

    &:hover {
        &::after {
            transform: scaleX(1); 
        }
    }
`;

function FooterLinks({ links }) {
    const colLinks = [];

    for(let i = 0; i < links.length; i+=4) {
        colLinks.push(
            <FooterColLinks key={i}>
                {links.slice(i, i+4).map(link => (
                    <ColLink key={`${link.text}-${link.id}`}>
                        {
                            link.path ?
                                <Link to={link.path}>
                                    <Label>{link.text}</Label>
                                </Link> 
                                : 
                                <a href={link.url} target="_blank" rel="noreferrer">
                                    <Label>{link.text}</Label>
                                </a>
                        }
                    </ColLink>
                ))}
            </FooterColLinks>
        )
    }
    return (
        <FooterLinksWrapper>
            {colLinks}
        </FooterLinksWrapper>
    )
}

export default FooterLinks;

