import styled, { css } from 'styled-components';

export const Label = styled.label`
    font-size: ${props => {
        switch(props.size) {
            case 'large':
                return '2rem';
            case 'medium':
                return '1.6rem';
            case 'small':
                return '1.4rem';
            default:
                return '1.6rem'
        }
    }};
    font-weight: ${props => {
        switch(props.weight) {
            case 'light':
                return 300;
            case 'normal':
                return 400;
            case 'bold':
                return 500;
            case 'black': 
                return 800;
            default: 
                return 400;
        }
    }};
    letter-spacing: 0.15rem;
    color: ${props => {
        switch(props.color) {
            case 'white':
                return props.theme.colors.white;
            case 'lightGray1': 
                return props.theme.colors.lightGray1;
            case 'lightGray2':
                return props.theme.colors.lightGray2;
            case 'black':
                return props.theme.colors.black;
            case 'darkGray1':
                return props.theme.colors.darkGray1;
            case 'darkGray2':
                return props.theme.colors.darkGray2;
            case 'darkGray3':
                return props.theme.colors.darkGray3;
            case 'red':
                return props.theme.colors.red;
            case 'darkRed':
                return props.theme.colors.darkRed;
            default: 
                return props.theme.colors.lightGray1;
        }
    }};
    text-align: ${props => props.textAlign ? props.textAlign : 'left'};
    text-transform: ${props => props.uppercase ? props.uppercase : 'capitalize'};
    ${props => props.verticalMode && css`
        line-height: 150%;
        writing-mode: sideways-rl;
        text-orientation: mixed;
    `}
`;

export const Paragraph = styled.p`
    font-size: ${props => {
        switch(props.size) {
            case 'large':
                return '2rem';
            case 'medium':
                return '1.6rem';
            default:
                return '1.6rem'
        }
    }};
    font-weight: ${props => {
        switch(props.weight) {
            case 'light':
                return 300;
            case 'normal':
                return 400;
            case 'bold':
                return 600;
            default: 
                return 400;
        }
    }};
    letter-spacing: 0.15rem;
    color: ${props => {
        switch(props.color) {
            case 'white':
                return props.theme.colors.white;
            case 'lightGray1': 
                return props.theme.colors.lightGray1;
            case 'lightGray2':
                return props.theme.colors.lightGray2;
            case 'black':
                return props.theme.colors.black;
            case 'darkGray1':
                return props.theme.colors.darkGray1;
            case 'darkGray2':
                return props.theme.colors.darkGray2;
            case 'darkGray3':
                return props.theme.colors.darkGray3;
            case 'red':
                return props.theme.colors.red;
            case 'darkRed':
                return props.theme.colors.darkRed;
            default: 
                return props.theme.colors.lightGray1;
        }
    }};
    text-align: ${props => props.textAlign ? props.textAlign : 'left'};
    text-transform: ${props => props.uppercase ? props.uppercase : 'capitalize'};
    line-height: 135%;
`;

export const HeadingOne = styled.h1`
    font-size: ${props => {
        switch(props.size) {
            case 'normal':
                return '4rem';
            case 'showcase':
                return '6.5rem';
            default:
                return '4rem';
        }
    }};
    font-weight: ${props => {
        switch(props.weight) {
            case 'normal':
                return 600;
            case 'showcase':
                return 800;
            default:
                return 600;
        }
    }};
    color: ${props => props.theme.colors.white};
    letter-spacing: 0.25rem;
    text-align: ${props => props.textAlign ? props.textAlign : 'left'};
    line-height: ${props => {
        switch(props.height) {
            case 'normal':
                return '150%';
            case 'showcase':
                return '125%';
            default:
                return '150%';
        }
    }}
`;

export const HeadingThree = styled.h3`
    font-size: 2.5rem;
    font-weight: ${props => {
        switch(props.weight) {
            case 'normal':
                return 600;
            case 'showcase':
                return 800;
            default:
                return 600;
        }
    }};
    color: ${props => props.theme.colors.white};
    letter-spacing: 0.25rem;
    text-align: ${props => props.textAlign ? props.textAlign : 'left'};
    line-height: 150%;
`;