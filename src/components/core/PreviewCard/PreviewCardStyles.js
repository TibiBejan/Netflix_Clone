import styled from 'styled-components';
import { Label } from '../../typography/Typography';

export const ResultCard = styled.div`
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: flex-start;
`;


export const ResultCardShowcase = styled.div`
    height: 25rem;
    width: 100%;
    margin-bottom: ${props => props.theme.margin.marginSmall};
    border-radius: 1.5rem;
    background-color: ${props => props.theme.colors.darkGray1};
    overflow: hidden;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 25rem;
        border-radius: inherit;
        opacity: ${props => props.isHovered ? 1 : 0};
        visibility: ${props => props.isHovered ? 'visible' : 'hidden'};
        background: rgba(229, 9, 20, 0.7);
        background: -webkit-linear-gradient(to bottom,  rgba(229, 9, 20, 0.4), rgba(88, 0, 0, 0.95)) 80%;
        background: linear-gradient(to bottom,  rgba(229, 9, 20, 0.4), rgba(88, 0, 0, 0.95)) 80%;
        transition: all 0.35s cubic-bezier(0.39, 0.575, 0.565, 1);
        z-index: 150;
    }
`;

export const ResultCardDescription = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    column-gap: 1.5rem;
    padding: 0 1.5rem;

    ${Label} {
        &:first-child {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }
`;