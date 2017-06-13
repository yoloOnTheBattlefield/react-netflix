import styled from 'styled-components';
import { black, maxWidth } from '../../theme/styles';

export const MovieList = styled.div`
  width: 100%;
  max-width: ${maxWidth};
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  padding: 20px 0;
`;

export const MovieListHeader = styled.div`
  z-index: 5;
  width: 100%;
  max-width: ${maxWidth};
  height: 60px;
  background: ${black};
  margin: 0 auto;
  padding: 0px;
  display: flex;
  align-items: center;
  text-align: left;
  h1{
    fontSize: 40px;
    background: linear-gradient( #FF220C, #D33E43);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
