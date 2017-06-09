import styled, { keyframes, extend } from 'styled-components';
import narcos from '../../../assets/narcos.gif';

const image = `url(${narcos})`;



export const Hero = styled.div`
  position: relative;
  background-size: cover;
  background-position: 50%;
  width: 100vw;
  min-height: 100vh;
  background-image: ${image};
  z-index: 2;
  h1{
    background-image: ${image};
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0,0,0, .9), rgba(0,0,0, .5), 95%, rgba(0,0,0, .9)) ;
  color: white;
  position: relative;
`;

export const Header = styled.h1`
  width: 100%;
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: 'Roboto', sans-serif;
  font-size: 180px;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-text-stroke: 2px white;
  transition: 0.5s ease-in-out;
  transform: ${props => props.showHeader ? 'scale(1)' : 'scale(5)'};
  opacity: ${props => props.showHeader ? '1' : '0'};
`;

export const Panel = styled.div`
  width: 100vw;
  height: ${props => props.top ? '80px' : '100px'};
  background: #040405;
  position: absolute;
  transition: 0.5s;
  top: ${props => props.top ? '0' : ''};
  left: 0;
  bottom: ${props => props.bottom ? '0' : ''};
  transform: ${props => props.showPanel ? 'translatey(0)' : 'translatey(-100px)'};
`;

export const BottomPanel = Panel.extend`
  transform: ${props => props.showPanel ? 'translatey(0px)' : 'translatey(100px)'};
`;

const line = keyframes`
	from {
		transform: translatey(-100%);
	}

	to {
		transform: translatey(+100%);
	}
`;

export const Line = styled.div`
  width: 1px;
  height: 60px;
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 20px;
  span{
    width: 1px;
    height: 120px;
    background: white;
    position: absolute;
    transform: translatey(-100%);
    animation: ${line} 2s ease-in-out infinite;
    animation-play-state: ${props => props.showLine ? 'play' : 'paused'}
  }
`;
