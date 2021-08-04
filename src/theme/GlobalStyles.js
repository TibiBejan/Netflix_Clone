import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
        font-weight: 300;
        scroll-behavior: smooth;

        @media ${props => props.theme.breakpoints.tablet} {
            font-size: 50%;
        }
    }

    body {
        font-family: ${props => props.theme.fonts.main};
        font-size: 1.6rem;
        background-color: ${props => props.theme.colors.black};
        color: ${props => props.theme.colors.lightGray1};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overscroll-behavior-y: none;
        overflow-y: auto;
    }

    ol,
    ul {
	    list-style: none;
    }

    a {
        text-decoration: none;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export default GlobalStyles;