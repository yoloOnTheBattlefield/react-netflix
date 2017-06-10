import styled from 'styled-components';

import { navHeight, black, fastTransition, mediumTransition } from '../theme/styles';

export const Nav = styled.nav`
  width: 100%;
  left: 0;
  right: 0;
  margin: 0 auto;
  position: fixed;
  height: ${navHeight}px;
  z-index: 100;
  display: flex;
  justify-content: center;
  background: ${black};
  transition: ${mediumTransition};
`;

export const Form = styled.form`
  width: 90%;
  max-width: 900px;
  height: 50px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;

`;

export const Input = styled.input`
  width: 300px;
  margin-left: 50px;
  border-radius: 35px;
  height: 40px;
  background: RGBA(33, 32, 37, 0.2);
  cursor: pointer;
  color: white;
  padding: 0 20px;
  padding-left: 30px;
  border: 1px solid rgba(255,255,255, 0.2);
  transition: ${fastTransition};
  text-align: left;
  transform: ${props => props.showInput ? 'translatey(0)' : `translatey(-${navHeight}px)`};
  &:focus{
    border-color: rgba(255,255,255, 0.5);
    width: 325px;
    outline: none;
  }
`;

export const SignIn = styled.div`
  width: 200px;
  height: 35px;
  padding: 5px 0;
  color: rgba(255, 255, 255, 0.8);
  position: absolute;
  top: 0px;
  bottom: 0px;
  margin: auto;
  right: 0;
  font-size: 25px;
  text-align: center;
  z-index: 100;
  align-items: center;
  line-height: 100%;
  overflow: hidden;
  cursor: pointer;
  transition: ${mediumTransition} ease-in-out;
  transform: ${props => props.showButtons ? 'translatex(0)' : 'translatex(100%)'};
  &:before{
    transition: ${mediumTransition} ease-in-out;
    transition-delay: 0;
    content: '';
    position: absolute;
    background: white;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -1;
    transform: translatex(90%);
  }
  &:after{
    transition: ${fastTransition} ease-in;
    transition-delay: ${mediumTransition};
    content: '';
    position: absolute;
    background: #D33E43;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform: translatex(-100%);
    z-index: -1;
  }
  &:hover{
    color: rgba(255, 255, 255, 1);
    &:before{
      transform: translatex(-100%);
    }
    &:after{
      transform: translatex(0%);
    }
  }
`;

export const Button = styled.div`
  width: 200px;
  height: 35px;
  padding: 5px 0;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  transform: ${props => props.showButtons ? 'translatex(0)' : 'translatex(-100%)'};
  font-size: 25px;
  text-align: center;
  z-index: 100;
  cursor: pointer;
  transition: ${mediumTransition} ease-in-out;
  color: rgba(255, 255, 255, 0.8);
  &:hover{
    color: rgba(255, 255, 255, 1);
  }
`;

export const SearchIcon = styled.div`
  width: 25px;
  height: 25px;
  color: rgba(255, 255, 255, 0.8);
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  font-size: 25px;
  cursor: pointer;
  transition: ${mediumTransition};
  transform: ${props => props.showSearch ? 'translatey(0)' : `translatey(-${navHeight}px)`};
  &:hover{
    color: rgba(255, 255, 255, 1);
  }
`;
