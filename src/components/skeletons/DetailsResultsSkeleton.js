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

const SkeletonWrapper = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    background-color: ${props => props.theme.colors.darkGray1};
    overflow: hidden;
`;

const SkeletonWrapperInner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    ${props => props.animate && css`
        animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1 ) infinite;
    `}
`;

function DetailsResultsSkeleton({animate, errorMessage, noPadding}) {
    return (
        <SkeletonWrapper noPadding={noPadding}>
            <SkeletonWrapperInner animate={animate}>
                {errorMessage && 
                    <Label 
                        size='large' 
                        weight='bold' 
                        textAlign='center'
                    >{ errorMessage }</Label>
                }
            </SkeletonWrapperInner>
        </SkeletonWrapper>
    )
}

export default DetailsResultsSkeleton;

