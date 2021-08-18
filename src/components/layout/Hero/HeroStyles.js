import styled from 'styled-components';
import { HeadingOne } from '../../typography/Typography';

export const HeroWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 90rem;
`;

export const HeroContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${props => props.theme.padding.paddingMedium};
  z-index: 125;
`;

export const HeroContentInner = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  padding-top: 12.5rem;;
`;

export const ContentWrapper = styled.div`
  grid-column: 1 / 2;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: ${props => props.theme.padding.paddingMedium} 0;

  ${HeadingOne} {
    margin-bottom: ${props => props.theme.margin.marginSmall};
  }
`;