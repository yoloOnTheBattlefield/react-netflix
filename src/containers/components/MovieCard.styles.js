import styled from 'styled-components';

export const Card = styled.div`
  width: 25%;
  min-width: 200px;
  height: 300px;
  padding: 0;
  margin: 0;
  background: url(${props => props.poster});
  background-size: cover;
  background-position: 50%;
  transition: 0.2s;
  &:hover{
    transform: scale(1.1);
  }
`;
