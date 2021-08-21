import styled from 'styled-components';

export const OriginalsRowWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: ${props => props.theme.margin.marginLarge};
`;

export const ResultsWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 30rem;

    @media ${props => props.theme.breakpoints.phoneLarge} {
        padding-right: ${props => props.theme.padding.paddingMobile};
    }

    & .swiper-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: flex-start;
    }
`;