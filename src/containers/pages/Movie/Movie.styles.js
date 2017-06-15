import styled from 'styled-components';
import {
  maxWidth,
  navHeight,
  black,
  gradientRed
} from '../../theme/styles'

export const Header = styled.div`
  width: 100%;
  height: calc(400px +  ${navHeight}px);
  background: ${black};
  display: flex;
  position: relative;
  padding-top: ${navHeight}px;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  height: 400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: relative;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 900px;
  height: 400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: relative;
`;

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url(${props => props.backdrop});
  background-size: cover;
  background-position: 50%;
  filter: blur(1px);
`;

export const Poster = styled.div`
  width: 200px;
  height: 300px;
  background: blue;
  margin-left: ${navHeight}px;
  margin-right: ${navHeight}px;
  margin-bottom: ${navHeight}px;
  background: url(${props => props.poster});
  background-size: cover;
  background-position: 50%;
  box-shadow: 0 8px 6px -6px ${black};
  align-self: flex-end;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #ECE2D0;
  height: 100%;
  min-height: calc(100vh - 400px);
`;

export const MovieTagline = styled.div`
  z-index: 5;
  width: 100%;
  height: ${navHeight}px;
  background: ${black};
  margin: 0 auto;
  padding: 0px;
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

export const Title = styled.div`
  height: ${navHeight}px;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 ${navHeight}px;
  display: flex;
  justify-content: space-between;
  h1{
    height: 100%;
    font-size: 40px;
    line-height: ${navHeight}px;
    align-items: center;
    color: #ECE2D0;
  }
  h3{
    height: 100%;
    font-size: 20px;
    line-height: ${navHeight}px;
    text-align: right;
    align-items: center;
    margin: 0;
    background: ${gradientRed};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
