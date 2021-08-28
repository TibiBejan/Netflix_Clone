import styled from "styled-components";
import { LazyLoadComponent   } from 'react-lazy-load-image-component';

export const ShowcaseCardWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1.5rem;
    overflow: hidden;
`;

export const ShowcaseCardInner = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    background-color: ${props => props.theme.colors.darkGray1};

    &.background-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const YoutTubeWrapper = styled(LazyLoadComponent)`
    position: relative;
    height: 100%;
    width: 100%;
    background-color: ${props => props.theme.colors.darkGray1};
`;

export const StyledFrame = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;