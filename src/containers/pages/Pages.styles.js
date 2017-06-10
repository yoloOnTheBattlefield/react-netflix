import styled from 'styled-components';

import { navHeight, black, fastTransition, Wrapper } from '../theme/styles';

export const Content = styled.div`

`;

export const Container = Wrapper.extend`
  min-height: 60vh;
  position: relative;
`;

export const MovieList = styled.div`
  transition: ${fastTransition};
  padding-top: 100px;
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;

export const Header = styled.div`
  position: ${props => props.touched ? 'fixed' : 'absolute' };
  top: ${props => props.touched ?  `${navHeight}px` : '0px'};
  height: ${props => props.touched ? '60px' : `${navHeight}px`};
  text-align: left;
  width: 100%;
  left: 0;
  right: 0;
  margin: 0 auto;
  background: ${black};
  z-index: 100;
  overflow: hidden;
  h1{
    width: 90%;
    max-width: 900px;
    margin: 0 auto;
    font-size: ${props => props.touched ? '30px' : '60px'};
    background: linear-gradient( #FF220C, #D33E43);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
