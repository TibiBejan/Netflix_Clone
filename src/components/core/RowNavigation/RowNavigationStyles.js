import styled from 'styled-components';

export const RowNavigationWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    
    @media ${props => props.theme.breakpoints.tabletLarge} {
        display: none;
    }
`;

export const NavigationButton = styled.button`
    height: ${props => {
        switch(props.cardType) {
            case 'max-height': 
                return '100%';
            case 'tall':
                return '60rem';
            case 'medium':
                return '35rem';
            default:
                return '25rem';
        }
    }};
    width: 5rem;
    background-image: linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.7), rgba(0,0,0,0.3));
    visibility: ${props => props.visible === true ? 'visible' : 'hidden'};
    pointer-events: ${props => props.visible === true ? 'all' : 'none'};
    opacity: ${props => props.visible === true ? 1 : 0};
    transition: all 0.35s cubic-bezier(0.075, 0.82, 0.165, 1);
    z-index: 150;
`;