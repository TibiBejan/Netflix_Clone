import styled from "styled-components";
import { Label } from "../../typography/Typography";

export const ActorCardWrapper = styled.div`
    width: 100%;
    min-height: 35rem;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
    padding: ${props => props.theme.padding.paddingSmall};
    background-color: ${props => props.theme.colors.darkGray1};
    border-radius: 1rem;

    ${Label} {
        @media ${props => props.theme.breakpoints.tablet} {
            font-size: 1.8rem;
        }
    }
`;

export const ActorProfilePicture = styled.div`
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.darkGray2};
    pointer-events: none;
    user-select: none;
    overflow: hidden;
`;

export const PopularityWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;

    ${Label} {
        margin-right: 0.5rem;

        @media ${props => props.theme.breakpoints.tablet} {
            font-size: 2rem;
        }
    }
`;
