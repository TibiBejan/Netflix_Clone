import styled from 'styled-components';
import { Label } from '../typography/Typography';

export const DetailsHeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    padding-right: ${props => props.theme.padding.paddingMedium};
    margin-bottom: ${props => props.theme.margin.marginMedium};

    @media ${props => props.theme.breakpoints.tabletLarge} {
        padding-right: ${props => props.theme.padding.paddingSmall};
    }

    @media ${props => props.theme.breakpoints.phoneLarge} {
        padding-right: ${props => props.theme.padding.paddingMobile};
    }
`;

export const HeaderTitle = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
`;

export const RatingWrapper = styled.div`
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: flex-start;

    ${Label} {
        margin-right: 1.5rem;
    }
`;

export const HeaderLabels = styled.ul`
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: flex-start;
`;

export const LabelWrapper = styled.li`
    position: relative;
    padding: 0 1.5rem;

    &:first-child {
        padding-left: 0;
    }

    &:last-child {
        padding-right: 0;
    }

    &:not(:last-child) {
        &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        height: 100%;
        width: 0.2rem;
        background-color: ${props => props.theme.colors.darkGray3};
        border-radius: 1.5rem;
        }
    }
`;