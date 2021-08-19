import React from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
    0% { 
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
`;

const HeroSkeletonWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    min-height: 90rem;
    background-color: ${props => props.theme.colors.black};
`;

const SkeletonBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.black};
    z-index: 110;
    user-select: none;
    pointer-events: none;
`;

const SkeletonContent = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 ${props => props.theme.padding.paddingMedium};
    z-index: 125;
`;

const SkeletonContentInner = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 50%);
    padding-top: 12.5rem;

    @media ${props => props.theme.breakpoints.desktopSmall} {
    grid-template-columns: 65% 1fr;
    }

    @media ${props => props.theme.breakpoints.tabletLarge} {
        grid-template-columns: 90% 1fr;
    }
`;

const SkeletonContentWrapper = styled.div`
    grid-column: 1 / 2;
    display: grid;
    grid-template-rows: 25% 20% 40%;
    row-gap: 5%;
    padding: ${props => props.theme.padding.paddingMedium} 0;
`;

const SkeletonHeader = styled.div`
    grid-row: 1 / 2;
    background-color: ${props => props.theme.colors.darkGray1};
    will-change: opacity;
    animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1 ) infinite;
`;

const SkeletonBody = styled.div`
    grid-row: 2 / 3;
    background-color: ${props => props.theme.colors.darkGray1};
    will-change: opacity;
    animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1 ) infinite;
`;

const SkeletonPopularThisWeek = styled.div`
    grid-row: 3 / 4;
    background-color: ${props => props.theme.colors.darkGray1};
    will-change: opacity;
    animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1 ) infinite;
`;

function HeroSkeleton() {
    return (
        <HeroSkeletonWrapper>
            <SkeletonBackground />
            <SkeletonContent>
                <SkeletonContentInner>
                    <SkeletonContentWrapper>
                        <SkeletonHeader />
                        <SkeletonBody />
                        <SkeletonPopularThisWeek />
                    </SkeletonContentWrapper>
                </SkeletonContentInner>
            </SkeletonContent>
        </HeroSkeletonWrapper>
    )
}

export default HeroSkeleton;
