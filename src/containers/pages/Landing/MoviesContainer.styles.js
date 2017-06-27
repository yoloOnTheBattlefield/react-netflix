import styled from 'styled-components';
import { maxWidth, navHeight } from '../../theme/styles';
import { phone } from '../../theme/sizes';

const gradientRed = 'linear-gradient( #FF220C, #D33E43)';

export const MovieList = styled.div`
  width: 100%;
  max-width: ${maxWidth};
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  padding: 20px 0;
  @media (max-width: ${phone}px){
    width: 100vw;
    padding: 0;
  }
`;

export const MovieListHeader = styled.div`
  z-index: 5;
  width: 100%;
  max-width: ${maxWidth};
  height: ${navHeight}px;
  margin: 0 auto;
  padding: 0px;
  display: flex;
  align-items: center;
  h1{
    font-size: 40px;
    background: ${gradientRed};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media (max-width: ${phone}px){
    height: 65px;
    h1{
      margin: 0 auto;
      font-size: 28px;
    }
  }
`;
