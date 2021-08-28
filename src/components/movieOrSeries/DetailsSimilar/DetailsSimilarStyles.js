import styled from "styled-components";

export const SimilarWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
`;

export const ResultsWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    & .swiper-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: flex-start;
    }
`;