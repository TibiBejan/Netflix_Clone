import styled from 'styled-components';
import { Paragraph } from '../../typography/Typography';

export const OverviewWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-between;

    ${Paragraph} {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4; /* number of lines to show */
        -webkit-box-orient: vertical;
    }
`;

export const OverviewDataRows = styled.div`
    display: flex;
    flex-flow: column;
    align-items: flex-start;
`;

export const OverviewRow = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 15% 1fr;
    column-gap: 2.5rem;
    align-items: center;
    justify-items: flex-start;
    
    &:not(:last-child) {
        margin-bottom: 2.5rem;
    }
`;

export const RelatedResults = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    overflow: hidden;
`;

export const ResultsWrapper = styled.div`
    position: relative;
    width: 100%;

    & .swiper-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: flex-start;
    }
`;

