import styled from 'styled-components';
import { black, maxWidth, gradientRed, navHeight } from '../../theme/styles';

export const MovieList = styled.div`
  width: 100%;
  max-width: ${maxWidth};
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  padding: 20px 0;
`;

export const MovieListHeader = styled.div`
  z-index: 5;
  width: 100%;
  max-width: ${maxWidth};
  height: ${navHeight}px;
  background: ${black};
  margin: 0 auto;
  padding: 0px;
  display: flex;
  align-items: center;
  text-align: left;
  h1{
    font-size: 40px;
    background: ${gradientRed};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
