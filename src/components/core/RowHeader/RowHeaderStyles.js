import styled from 'styled-components';
import { HeadingFour } from '../../typography/Typography';

export const ResultWrapperHeading = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${props => props.theme.margin.marginSmall};
    padding-right: ${props => props.theme.padding.paddingMedium};

    @media ${props => props.theme.breakpoints.tabletLarge} {
        padding-right: ${props => props.theme.padding.paddingSmall};
    }

    @media ${props => props.theme.breakpoints.phoneLarge} {
        padding-right: ${props => props.theme.padding.paddingMobile};
    }
`;

export const TitleWrapper = styled.div`
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: flex-start;

    ${HeadingFour} {
        margin-right: 1rem;
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