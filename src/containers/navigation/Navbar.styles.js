import styled from 'styled-components';

import { navHeight, black, fastTransition } from '../theme/styles';

export const Nav = styled.nav`
  width: 100%;
  left: 0;
  right: 0;
  margin: 0 auto;
  position: absolute;
  height: ${navHeight}px;
  z-index: 100;
  display: flex;
  justify-content: center;
  background: ${black};
`;

export const Button = styled.div`
  width: 150px;
  height: 35px;
  padding: 5px 0;
  margin: auto;
  font-size: 25px;
  text-align: center;
  cursor: pointer;
  transition: ${fastTransition};
  color: rgba(255, 255, 255, 0.8);
  &:hover{
    color: rgba(255, 255, 255, 1);
  }
`;
