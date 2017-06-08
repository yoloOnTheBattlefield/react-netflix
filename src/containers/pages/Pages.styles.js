import styled from 'styled-components';

import { navHeight, black } from '../../theme/styles';

export const Content = styled.div`
`;

export const FullPage = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: ${black};
`;

export const MovieList = styled.div`
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  display:flex;
  flex-wrap: wrap;
`;

export const Header = styled.div`
  height: 120px;
  text-align: left;
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  h1{
    font-size: 60px;
    background: linear-gradient( #FF220C, #D33E43);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
