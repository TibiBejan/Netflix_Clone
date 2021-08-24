import styled from 'styled-components';
import { HeadingTwo, Label } from '../../typography/Typography';

export const FooterWrapper = styled.div`
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin: ${props => props.theme.margin.marginLarge} 0;
    padding: 0 ${props => props.theme.padding.paddingMedium};

    @media ${props => props.theme.breakpoints.tabletLarge} {
        padding: 0 ${props => props.theme.padding.paddingSmall};
    }

    @media ${props => props.theme.breakpoints.phoneLarge} {
        margin: ${props => props.theme.margin.marginMedium} 0;
        padding: 0 ${props => props.theme.padding.paddingMobile};
    }
`;

export const FooterShowcase = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;

    ${Label} {
        margin-bottom: 1.5rem;
    }

    ${HeadingTwo} {
        margin-bottom: 1.5rem;
    }
`;

export const ShowcaseBackground = styled.div`
    position: relative;
    width: 100%;
    max-width: 80%;
    height: auto;
    
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to bottom, rgba(0,0,0, 0.9) 15%, rgba(0,0,0,0.4), rgba(0,0,0,0.1));
        z-index: 150;
    }

    & .background-image {
        pointer-events: none;
        user-select: none;
    }

    @media ${props => props.theme.breakpoints.phoneLarge} {
        max-width: 90%;
    }
`;



