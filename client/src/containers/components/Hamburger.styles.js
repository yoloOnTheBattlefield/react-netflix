import styled from 'styled-components';
import { phone } from '../theme/sizes';

const hamColor = '#293132';

export const Hamburger = styled.div`
  position: fixed;
  width: 60px;
  height: 60px;
  top: 15px;
  right: 10%;
  box-sizing: border-box;
  background-position: top right;
  z-index: 100;
  border-radius: 360px;
  border: 2px solid ${hamColor};
  transition: .25s ease-in-out;
  z-index: 1000002;
  cursor: pointer;
  @media (max-width: ${phone}px){
    top: 10px;
    right: 15px;
  }
`;

export const Inner = styled.div`
  position: absolute;
  top: 0; bottom: 0;
  left: 0; right: 0;
  margin: auto;
  width: 40px;
  height: 40px;
  overflow: hidden;
`;

const Line = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  background: ${hamColor};
  z-index: 999999999999 !important;
  display: block;
  height: 2px;
  width: 36px;
  border-radius: 0px;
  transform-origin: center;
  transition: 0.2s ease-in-out;
`;

export const TopLine = Line.extend`
  top: ${props => props.open ? '19px' : '10px'};
  transform: ${props => props.open ? 'rotate(135deg)' : 'rotate(0)'}
`;

export const MiddleLine = Line.extend`
  top: 0;
  bottom: 0;
  transform: ${props => props.open ? 'translate(100px)' : 'translate(0)'};
  opacity:  ${props => props.open ? '0' : '1'};
`;

export const BottomLine = Line.extend`
  bottom: ${props => props.open ? '19px' : '10px'};
  transform: ${props => props.open ? 'rotate(-135deg)' : 'rotate(0)'}
`;
