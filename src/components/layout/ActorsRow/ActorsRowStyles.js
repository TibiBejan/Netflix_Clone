import styled from 'styled-components';

export const ActorsRowWrapper = styled.div`
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: flex-start;
    order: ${props => props.order ? props.order : -1};
    margin: ${props => props.theme.margin.marginLarge} 0;
    padding-right: ${props => props.theme.padding.paddingMedium};

    @media ${props => props.theme.breakpoints.tabletLarge} {
        padding-right: ${props => props.theme.padding.paddingSmall};
    }

    @media ${props => props.theme.breakpoints.phoneLarge} {
        margin: ${props => props.theme.margin.marginMedium} 0;
        padding-right: ${props => props.theme.padding.paddingMobile};
    }
`;

export const ActorsRowBody = styled.div`
    position: relative;
    width: 100%;
    min-height: 35rem;
`;

export const PopularActorsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
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


