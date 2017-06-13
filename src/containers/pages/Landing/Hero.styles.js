import styled from 'styled-components';
import { Container } from '../Pages.styles';
import { black, gradientRed } from '../../theme/styles';

export const Hero = styled.div`
  position: relative;
  width: 100vw;
  height: 20vh;
  z-index: 2;
  background: ${black};
`;

export const HeroContainer = styled.div`
  height: 20vh;
`;

export const Header = Hero.extend`
  font-family: 'Roboto', sans-serif;
  font-size: 120px;
  background: #CB356B;
  background: ${gradientRed};
  background: ${gradientRed};
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  display: flex;
  justify-content: center;
  align-items: center;
`;
