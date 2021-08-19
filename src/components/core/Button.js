import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const ButtonWrapper = styled.button`
    min-height: ${props => props.rounded ? '5rem' : '4.5rem'};
    width: ${props => props.rounded ? '5rem' : 'auto'};
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    column-gap: 1.5rem;
    padding: 0 ${props => props.rounded ? 0 : '2.5rem'};
    border-radius: ${props => props.rounded ? '50%' : '0.5rem'};
    transition: 0.35s ease-in-out;
    ${props => {
        switch(props.btnStyle) {
            case 'solid':
                return css`
                    background-color: ${props.background ? props.background : props.theme.colors.lightGray1};
                    border: 0.15rem solid ${props.background ? props.background : props.theme.colors.lightGray1};
                    color: ${props.color ? props.color : props.theme.colors.black};

                    &:hover {
                        background-color: transparent;
                        color: ${props.theme.colors.lightGray1};
                    }
                `;
            case 'outline':
                return css`
                    background-color: transparent;
                    border: 0.15rem solid ${props.background ? props.background : props.theme.colors.lightGray1};
                    color: ${props.color ? props.color : props.theme.colors.lightGray1};

                    &:hover {
                        background-color: ${props.background ? props.background : props.theme.colors.lightGray1};
                        color: ${props.theme.colors.black};
                    }
                `;
            case 'outline-utility':
                return css`
                    background-color: transparent;
                    border: 0.15rem solid ${props.background ? props.background : props.theme.colors.lightGray1};
                    color: ${props.color ? props.color : props.theme.colors.lightGray1};

                    &:disabled {
                        border: 0.15rem solid ${props => props.theme.colors.darkGray3};
                        color: ${props.color ? props.color : props.theme.colors.darkGray3};
                    }
                `;
            default: 
                return css`
                    background-color: ${props.theme.colors.lightGray1};
                    border: 0.15rem solid ${props.theme.colors.lightGray1};
                    color: ${props.theme.colors.black};

                    &:hover {
                        background-color: transparent;
                        color: ${props.theme.colors.lightGray1};
                    }
                `;
        }
    }}
`;

const ButtonLabel = styled.label`
    font-size: 1.4rem;
    font-weight: 500;
    letter-spacing: 0.15rem;
    color: inherit;
    text-transform: uppercase;
    pointer-events: none;
    transition: 0.35s ease-in-out;

    @media ${props => props.theme.breakpoints.phoneMedium} {
        font-size: 1.2rem;
    }
`;

const Button = React.forwardRef(({btnStyle, background, color, rounded, disabled, text, children}, ref) => (
    <ButtonWrapper 
        btnStyle={ btnStyle } 
        background={ background } 
        color={ color } 
        rounded={ rounded } 
        ref={ ref }
        disabled={ disabled }
    >
        { text && <ButtonLabel>{ text }</ButtonLabel>}
        { children }
    </ButtonWrapper>
))

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    btnStyle: PropTypes.string,
    background: PropTypes.string,
    color: PropTypes.string,
    text: PropTypes.string,
    rounded: PropTypes.bool,
}

export default Button;
