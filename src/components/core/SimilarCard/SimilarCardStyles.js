import styled from "styled-components";
import { HeadingThree, Label, Paragraph } from "../../typography/Typography";

export const SimilarCardWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: 25rem 1fr;
    border-radius: 0.5rem;
    background-color: ${props => props.theme.colors.darkGray1};
    overflow: hidden;
`;

export const CardShowcase = styled.div`
    position: relative;
    width: 100%;
    height: 25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.darkGray2};

    & .background-image {
        filter: brightness(75%);
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        opacity: ${props => props.isHovered ? 1 : 0};
        visibility: ${props => props.isHovered ? 'visible' : 'hidden'};
        background: rgba(229, 9, 20, 0.7);
        background: -webkit-linear-gradient(to bottom,  rgba(229, 9, 20, 0.4), rgba(88, 0, 0, 0.95)) 80%;
        background: linear-gradient(to bottom,  rgba(229, 9, 20, 0.4), rgba(88, 0, 0, 0.95)) 80%;
        transition: all 0.35s cubic-bezier(0.39, 0.575, 0.565, 1);
        z-index: 135;
    }
`;

export const ShowcaseMeta = styled.div`
    position: absolute;
    top: ${props => props.theme.padding.paddingMobile};
    right: ${props => props.theme.padding.paddingMobile};
    z-index: 150;
`;

export const CardContent = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: space-between;
    row-gap: 2.5rem;
    padding: ${props => props.theme.padding.paddingSmall};
`;

export const CardContentHeader = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    column-gap: 2.5rem;
`;

export const LabelsWrapper = styled.div`
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    row-gap: 1rem;
`;

export const StyledButton = styled.button`
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    column-gap: 0.5rem;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    background-color: ${props => props.theme.colors.red};
    transition: 0.35s cubic-bezier(0.39, 0.575, 0.565, 1);

    ${Label} {
        cursor: inherit;
    }

    &:hover {
        background-color: ${props => props.theme.colors.darkRed};
    }
`;

export const CardContentBody = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: flex-start;
    row-gap: 2.5rem;
    overflow: hidden;

    ${HeadingThree} {
        width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
`;

export const ParagraphWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    ${Paragraph} {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        overflow-x: hidden;
        padding-right: 1.5rem;

        &::-webkit-scrollbar {
            width: 0.5rem;
        }

        &::-webkit-scrollbar-track {
            background-color: transparent;
        }

        &::-webkit-scrollbar-thumb {
            background: ${props => props.theme.colors.darkGray3};
            transition: 0.35s cubic-bezier(0.39, 0.575, 0.565, 1);
            border-radius: 5rem;
        }

        &::-webkit-scrollbar-thumb:hover {
            background: ${props => props.theme.colors.darkGray2};
        }
    }
`;