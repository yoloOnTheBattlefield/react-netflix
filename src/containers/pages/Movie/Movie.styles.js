import styled from 'styled-components';
import {
  maxWidth,
  navHeight,
  black,
  gradientRed
} from '../../theme/styles';

const height = '600px';
const height2 = navHeight;

/***************************************/
/***************************************/

/***************************************/

export const Header = styled.div`
  width: 100%;
  height: ${height};
  background: ${black};
  background: white;
  background: white;
  position: relative;
  overflow: hidden;
`;

export const HeaderWrapper = Header.extend`
  position: absolute;
  top: 0;
  left: 0;
`;


export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url(${props => props.backdrop});
  background-size: cover;
  background-position: 50%;
  filter: blur(2px);
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 900px;
  height: ${height};
  margin: 0 auto;
  position: relative;
`;


export const Poster = styled.div`
  width: 300px;
  height: 400px;
  position: ${props => props.fixed ? 'fixed' : 'absolute'};
  top: 100px;
  margin: auto;
  background-size: cover;
  background-position: 50%;
  box-shadow: 0 8px 50px -50px ${black};
  border-radius: 5px;
  transform: ${props => props.mounted ? 'translatey(0px) scale(1)' : 'translatey(50px) scale(1.1)'};
  opacity: ${props => props.mounted ? 1 : 0.8 };
  transition: all 0.5s ease-in-out;
`;

export const MovieTagline = styled.div`
  z-index: 5;
  width: 100%;
  height: ${navHeight * 1.5}px;
  background: ${black};
  background: white;
  top: ${props => props.alternate ? '0px' : '100%' };
  transform: ${props => props.mounted ? `translatey(-${navHeight * 1.5}px)` : `translatey(${navHeight * 1.5}px)`};
  transition: all 0.75s ease-in-out;
  position: absolute;
  overflow: hidden;
  display: block;
  position: ${props => props.alternate ? 'fixed' : 'absolute'};
`;

export const Title = styled.div`
  height: ${navHeight * 1.5}px;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: ${props => !props.alternate ? 0 : '-100%'};
  transition: 0.2s;
  h1{
    height: 100%;
    font-size: 25px;
    line-height: ${navHeight * 1.5}px;
    align-items: center;
    background: ${gradientRed};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const TitleAlternate = Title.extend`
  top: ${props => props.alternate ? 0 : `${navHeight * 1.5}px`};
  h1{
    font-size: 30px;
  }
`;


/***************************************/
/***************************************/

/***************************************/

export const Container = styled.div`
  z-index: 5;
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${black};
  background: white;
`;
