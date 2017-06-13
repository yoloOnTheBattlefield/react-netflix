import styled from 'styled-components';
import { fastTransition } from '../theme/styles';

export const Form = styled.form`
  width: 300px;
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 300px;
  height: 40px;
  background: RGBA(33, 32, 37, 1);
  cursor: pointer;
  color: white;
  padding: 0 20px;
  border: 0;
  border-bottom: 5px solid rgba(255,255,255, 0.2);
  box-sizing: border-box;
  transition: ${fastTransition};
  text-align: left;
  &:focus{
    border-color: rgba(255,255,255, 0.5);
    outline: none;
  }
`;
