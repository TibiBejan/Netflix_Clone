import styled from 'styled-components';
import { HeadingThree, Label, Paragraph } from '../../typography/Typography';

export const ShowcaseCardWrapper = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-start;
`;

export const ShowcaseShadow = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20rem;
    height: 20rem;
    background-color: rgba(88, 0, 0, 0.85);
    filter: blur(10rem);
    --webkit-filter: blur(10rem);
`;

export const ShowcaseCardBackground = styled.div`
    position: relative;
    height: 35rem;
    width: 35rem;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.black};
    backdrop-filter: blur(1rem);
    -webkit-backdrop-filter: blur(1rem);
    transform: translateY(15%);
    overflow: hidden;
    z-index: 150;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: ${props => props.isHovered ? 1 : 0};
        visibility: ${props => props.isHovered ? 'visible' : 'hidden'};
        background: rgba(229, 9, 20, 0.7);
        background: -webkit-linear-gradient(to bottom,  rgba(229, 9, 20, 0.4), rgba(88, 0, 0, 0.95)) 80%;
        background: linear-gradient(to bottom,  rgba(229, 9, 20, 0.4), rgba(88, 0, 0, 0.95)) 80%;
        transition: all 0.35s cubic-bezier(0.39, 0.575, 0.565, 1);
        z-index: 150;
    }

    @media ${props => props.theme.breakpoints.tabletLarge} {
        height: 30rem;
        width: 30rem;
    }
`;

export const BackgroundCircle = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 200;
`;

export const ShowcaseCardContent = styled.div`
    position: relative;
    height: 30rem;
    width: 100%;
    display: grid;
    grid-template-rows: repeat(4, min-content);
    row-gap: 2.5rem;
    padding: ${props => props.theme.padding.paddingSmall};
    border-radius: 1.5rem;
    border: 0.1rem solid ${props => props.theme.colors.black};
    background-color: ${props => props.theme.colors.darkGray1};
    overflow: hidden;

    ${HeadingThree} {
        width: 100%;
        text-transform: uppercase;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`; 

export const ContentLabels = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
`;

export const ContentLabel = styled.div`
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;

    ${Label} {
        margin-left: 1rem;
    }
`;

export const ContentDescription = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    ${Paragraph} {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4; 
        -webkit-box-orient: vertical;
        text-shadow: 0.1rem 0.1rem 0.1rem rgba(0,0,0,0.6);
    }
`;
