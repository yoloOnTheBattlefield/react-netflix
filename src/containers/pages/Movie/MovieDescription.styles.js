import styled from 'styled-components';
import {
  maxWidth,
  navHeight,
  black,
  gradientRed
} from '../../theme/styles';

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
  height: 100vh;
  background: white;
`;

export const Title = styled.div`
  height: ${navHeight * 1.5}px;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  transition: 0.2s;
  h1{
    height: 100%;
    font-size: 40px;
    line-height: ${navHeight * 1.5}px;
    align-items: center;
    background: ${gradientRed};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
