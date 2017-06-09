import styled from 'styled-components';

import { navHeight, black } from '../theme/styles';

export const Content = styled.div`
`;

export const FullPage = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: ${black};
  position: relative;
`;

export const MovieList = styled.div`
  transition: 0.2s;
  padding-top: 100px;
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;

export const Header = styled.div`
  position: ${props => props.touched ? 'fixed' : 'absolute' };
  top: ${props => props.touched ?  '80px' : '0px'};
  height: 80px;
  text-align: left;
  width: 100%;
  left: 0;
  right: 0;
  margin: 0 auto;
  background: ${black};
  z-index: 100;
  h1{
    width: 90%;
    max-width: 900px;
    margin: 0 auto;
    font-size: 60px;
    background: linear-gradient( #FF220C, #D33E43);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
