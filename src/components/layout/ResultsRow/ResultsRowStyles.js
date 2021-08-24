import styled from 'styled-components';

export const ResultRowWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: ${props => props.noMargin ? 0 : props.theme.margin.marginLarge};

    @media ${props => props.theme.breakpoints.phoneLarge} {
        margin-bottom: ${props => props.noMargin ? 0 : props.theme.margin.marginMedium};
    }
`;

export const ResultsWrapper = styled.div`
    position: relative;
    width: 100%;
    min-height: 30rem;

    & .swiper-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: flex-start;
    }
`;