import styled from 'styled-components';
import { HeadingOne } from '../../typography/Typography';

export const HeroWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 90rem;

  @media ${props => props.theme.breakpoints.tabletLarge} {
    height: auto;
    min-height: 75rem;
  }

  @media ${props => props.theme.breakpoints.phoneMedium} {
    min-height: 90rem;
  }
`;

export const HeroContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: space-between;
  padding-left: ${props => props.theme.padding.paddingMedium};
  z-index: 125;

  @media ${props => props.theme.breakpoints.tabletLarge} {
    padding-left: ${props => props.theme.padding.paddingSmall};
  }

  @media ${props => props.theme.breakpoints.phoneLarge} {
    padding-left: ${props => props.theme.padding.paddingMobile};
  }
`;

export const HeroContentInner = styled.div`
  height: auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  padding-top: 12.5rem;

  @media ${props => props.theme.breakpoints.desktopSmall} {
    grid-template-columns: 65% 1fr;
  }

  @media ${props => props.theme.breakpoints.tabletLarge} {
    grid-template-columns: 90% 1fr;
  }
`;

export const ContentWrapper = styled.div`
  grid-column: 1 / 2;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: center;
  padding-top: ${props => props.theme.padding.paddingSmall};
  overflow: hidden;

  ${HeadingOne} {
    margin-bottom: ${props => props.theme.margin.marginSmall};
  }

  @media ${props => props.theme.breakpoints.phoneLarge} {
    grid-column: 1 / -1;
    padding-right: ${props => props.theme.padding.paddingMobile};
  }
`;