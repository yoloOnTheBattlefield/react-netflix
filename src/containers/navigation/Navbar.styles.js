import styled from 'styled-components';

import { navHeight } from '../../theme/styles';

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
  background: linear-gradient(rgba(4,4,5,1), 90%, rgba(4,4,5,0.8));
  transition: 0.5s;
  transform: ${props => props.showNavbar ? 'translatey(0%)' : 'translatey(-100%)'};
`;

//background: linear-gradient(RGBA(33, 32, 37, 0.8), RGBA(33, 32, 37, 0.2));

export const Form = styled.form`
  width: 40%;
  height: 50px;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 80%;
  margin: 0 auto;
  border-radius: 35px;
  height: 40px;
  background: RGBA(33, 32, 37, 0.2);
  cursor: pointer;
  color: white;
  padding: 0 20px;
  border: 1px solid rgba(255,255,255, 0.2);
  transition: 0.3s;
  text-align: center;
  &:focus{
    border-color: rgba(255,255,255, 0.5);
    width: 100%;
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
  transition: 0.5s ease-in-out;
  transform: ${props => props.showButtons ? 'translatex(0)' : 'translatex(100%)'};
  &:before{
    transition: 0.5s ease-in-out;
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
    transition: 0.2s ease-in;
    transition-delay: 0.5s;
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
  transition: 0.5s ease-in-out;
  color: rgba(255, 255, 255, 0.8);
  &:hover{
    color: rgba(255, 255, 255, 1);
  }
`;
