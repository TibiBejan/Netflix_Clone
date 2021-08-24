import styled from "styled-components";
import { Label } from "../../typography/Typography";

export const MoodRowWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin: ${props => props.theme.margin.marginLarge} 0;
    padding-right: ${props => props.theme.padding.paddingMedium};

    @media ${props => props.theme.breakpoints.tabletLarge} {
        padding-right: ${props => props.theme.padding.paddingSmall};
    }

    @media ${props => props.theme.breakpoints.phoneLarge} {
        padding-right: ${props => props.theme.padding.paddingMobile};
    }

    @media ${props => props.theme.breakpoints.phoneMedium} {
        margin: ${props => props.theme.margin.marginMedium} 0;
    }
`;

export const MoodRowHeading = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${props => props.theme.margin.marginMedium};

    @media ${props => props.theme.breakpoints.phoneMedium} {
        margin-bottom: ${props => props.theme.margin.marginSmall};
    }
`;

export const MoodRowBody = styled.div`
    width: 100%;
    min-height: 25rem;
    display: flex;
    flex-flow: column;

    @media ${props => props.theme.breakpoints.tabletLarge} {
        min-height: 15rem;
    }
`;

export const MoodRowGridView = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(8, minmax(12.5rem, 1fr));
    gap: 2rem;

    @media ${props => props.theme.breakpoints.utilityDesktop} {
        grid-template-columns: repeat(6, minmax(12.5rem, 1fr));
    }
`;

export const MoodRowSlider = styled.div`
    width: 100%;
    min-height: inherit;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: ${props => props.theme.margin.marginSmall};

    & .swiper-container {
        width: 100%;
        height: 100%;
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

