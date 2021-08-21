import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Label } from '../typography/Typography';

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


const ResultsSkeletonWrapper = styled.div`
    width: 100%;
    height: 30rem;
    padding-right: ${props => props.theme.padding.paddingMedium};
    overflow: hidden;

    @media ${props => props.theme.breakpoints.tabletLarge} {
        padding-right: ${props => props.theme.padding.paddingSmall};
    }

    @media ${props => props.theme.breakpoints.phoneLarge} {
        padding-right: ${props => props.theme.padding.paddingMobile};
    }
`;

const ResultsSkeletonInner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1.5rem;
    background-color: ${props => props.theme.colors.darkGray1};
    ${props => props.animate && css`
        animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1 ) infinite;
    `}
`;

function ResultsRowSkeleton({animate, errorMessage}) {
    return (
        <ResultsSkeletonWrapper>
            <ResultsSkeletonInner animate={animate}>
                {errorMessage && 
                    <Label 
                        size='large' 
                        weight='bold' 
                        textAlign='center'

                    >{ errorMessage }</Label>
                }
            </ResultsSkeletonInner>
        </ResultsSkeletonWrapper>
    )
}

export default ResultsRowSkeleton;
