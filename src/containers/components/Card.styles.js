import styled from 'styled-components';

export const Card = styled.div`
  width: 25%;
  min-width: 200px;
  height: 300px;
  padding: 0;
  margin: 0;
  background: #000000;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #434343, #000000);
  background: linear-gradient(to top, #434343, #000000); 
  background: url(${props => props.poster});
  background-size: cover;
  background-position: 50%;
  cursor: ${props => props.cursor ? props.cursor : ''};
`;
