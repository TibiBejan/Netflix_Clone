import styled from "styled-components";

export const EpisodesWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-start;
`;

export const EpisodesHeader = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    z-index: 150;
`;

export const SelectWrapper = styled.select`
    width: 100%;
    margin-bottom: ${props => props.theme.margin.marginSmall};
    padding: 1rem;
    background-color: transparent;
    border: 0.15rem solid ${props => props.theme.colors.darkGray3};
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: 0.15rem;
    color: ${props => props.theme.colors.lightGray1};
    text-transform: uppercase;
    cursor: pointer;
    
    &::-webkit-calendar-picker-indicator {
        filter: invert(1);
    }
`;

export const SelectElement = styled.option`
    width: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    margin: 1.5rem 0;
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: 0.15rem;
    color: ${props => props.theme.colors.lightGray1};
    background-color: ${props => props.theme.colors.black};
    text-transform: uppercase;
`;

export const EpisodesResults = styled.div`
    width: 100%;
    height: 100%;
    margin-bottom: ${props => props.theme.margin.marginSmall};

    & .swiper-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: flex-start;
    }
`;

export const PaginationWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;

    @media ${props => props.theme.breakpoints.tablet} {
        display: none;
    }

    & .swiper-pagination-bullet {
        width: 1.75rem;
        height: 0.4rem;
        border-radius: 0;
        background-color: ${props => props.theme.colors.lightGray1};
        cursor: pointer;

        &:not(:last-child) {
            margin-right: 0.25rem;
        }
    }
`;