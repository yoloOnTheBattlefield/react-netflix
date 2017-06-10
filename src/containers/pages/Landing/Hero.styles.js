import styled, { keyframes, extend } from 'styled-components';
import { Container } from '../Pages.styles';
import { mediumTransition, mutedWhite } from '../../theme/styles';

import narcos from '../../../assets/narcos.gif';

const image = `url(${narcos})`;

export const Hero = styled.div`
  position: relative;
  width: 100vw;
  height: 60vh;
  z-index: 2;
  background-image: ${image};
  background-size: cover;
  background-position: 0%;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const HeroContainer = styled.div`
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7), 95%, rgba(0,0,0,0.9));
  height: 60vh;
`;

export const Header = Hero.extend`
  font-family: 'Roboto', sans-serif;
  font-size: 150px;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 2px ${mutedWhite};
  -webkit-background-clip: text;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${mediumTransition} ease-in-out;
  transform: ${props => props.showHeader ? 'scale(1)' : 'scale(5)'};
  opacity: ${props => props.showHeader ? '1' : '0'};
`;
