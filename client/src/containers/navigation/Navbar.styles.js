import styled from 'styled-components';

import { navHeight } from '../theme/styles';
import { phone} from '../theme/sizes';

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
`;

export const NavInner = styled.div`
  width: 100%;
  maxWidth: 900px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const MenuPanel = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: white;
  transform: ${props => props.open ? 'translate(0)' : 'translate(-100%)'};
  transition: 0.5s ease-in-out;
  z-index: 3;
`;

export const MenuList = styled.ul`
  list-style: none;
  position: absolute;
  top: 80px;
  width: 100vw;
  height: 500px;
  transform: ${props => props.open ? 'translate(0)' : 'translate(-100%)'};
  transition: 0.5s ease-in-out;
  transition-delay: 0.5s;
  li{
    font-size: 45px;
    padding: 20px 10px;
    color: rgba(0,0,0,0.8);
    cursor: pointer;
  }
`;
