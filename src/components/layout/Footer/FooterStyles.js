import styled from 'styled-components';

export const FooterWrapper = styled.div`
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin: ${props => props.theme.margin.marginLarge} 0;
    padding: 0 ${props => props.theme.padding.paddingMedium};

    @media ${props => props.theme.breakpoints.tabletLarge} {
        padding: 0 ${props => props.theme.padding.paddingSmall};
    }

    @media ${props => props.theme.breakpoints.phoneLarge} {
        margin: ${props => props.theme.margin.marginMedium} 0;
        padding: 0 ${props => props.theme.padding.paddingMobile};
    }
`;



