import styled from "styled-components";

export const InfoWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
`;

export const InfoDataRows = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding-top: ${props => props.theme.padding.paddingMobile};
    padding-bottom: ${props => props.theme.padding.paddingSmall};
`;

export const DataRow = styled.div`
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

export const ReviewsWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-flow: column;
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