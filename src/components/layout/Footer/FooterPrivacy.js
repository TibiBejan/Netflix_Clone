import React from 'react';
import styled from 'styled-components';
import { FOOTER_PRIVACY_POLICY_LINKS } from '../../../constants/constants';
import { Label, Paragraph } from '../../typography/Typography';

const FooterPrivacyWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
`;

const PrivacyLinks = styled.ul`
    width: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;

    @media ${props => props.theme.breakpoints.phoneLarge} {
        max-width: 70%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2.5rem;
        justify-content: center;
    }
`;

const PrivacyLink = styled.li`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;

    &:not(:last-child) {
        margin-right: ${props => props.theme.margin.marginMedium};

        @media ${props => props.theme.breakpoints.phoneLarge} {
            margin-right: 0;
        }
    }

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

    @media ${props => props.theme.breakpoints.phoneLarge} {
        justify-content: center;
    }
`;

const CopyrightWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function FooterPrivacy() {
    return (
        <FooterPrivacyWrapper>
            <PrivacyLinks>
                {
                    FOOTER_PRIVACY_POLICY_LINKS.map(link => (
                        <PrivacyLink key={link.id}>
                            <a href={link.url} target="_blank" rel="noreferrer">
                                <Label>{link.text}</Label>
                            </a>
                        </PrivacyLink>
                    ))
                }
            </PrivacyLinks>
            <CopyrightWrapper>
                <Paragraph weight='light' color='darkGray3' textAlign='center'>Copyright &copy; 2021 - Netflix Clone.</Paragraph>
            </CopyrightWrapper>
        </FooterPrivacyWrapper>
    )
}

export default FooterPrivacy;
