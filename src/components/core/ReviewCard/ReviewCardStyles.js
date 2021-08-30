import styled from "styled-components";
import { Paragraph } from "../../typography/Typography";

export const ReviewCardWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: ${props => props.theme.padding.paddingSmall};
    background-color: ${props => props.theme.colors.darkGray1};
    border-radius: 1rem;
    overflow: hidden;
`;

export const ReviewCardHeader = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 5.5rem 1fr;
    column-gap: 3.5rem;
    margin-bottom: ${props => props.theme.margin.marginMedium};
`;

export const CardProfileImage = styled.div`
    width: 5.5rem;
    height: 5.5rem;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 0.25rem solid ${props => props.theme.colors.darkRed};
`;

export const CardProfileMeta = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: center;
`;

export const DataRow = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: flex-start;
    column-gap: 2.5rem;
    
    &:not(:last-child) {
        margin-bottom: 1.5rem;
    }
`;

export const ReviewCardBody = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column;
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