import styled from 'styled-components';
import { Label } from '../../typography/Typography';

export const MoodCardInner = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    padding: ${props => props.theme.padding.paddingMobile};

    ${Label} {
        width: 100%;
        text-align: center;
        color: ${props => props.theme.colors.lightGray1};
        mix-blend-mode: difference;
    } 
`;

export const MoodCardIcon = styled.div`
    width: 5rem;
    height: 5rem;
    margin-bottom: 1.5rem;

    @media ${props => props.theme.breakpoints.desktopSmall} {
       width: 4rem;
        height: 4rem;
    }
`;

export const MoodCardWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    border-radius: 0.75rem;
    background-color: ${props => props.theme.colors.darkGray1};
    overflow: hidden;
    transition: 0.35s cubic-bezier(0.39, 0.575, 0.565, 1);

    &:hover {
        background-color: ${props => props.theme.colors.lightGray1};

        ${MoodCardIcon} {
           filter: drop-shadow(0rem 0rem 1.5rem rgba(184, 29, 36, 1));
        }
    }
`;