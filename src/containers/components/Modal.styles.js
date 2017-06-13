import styled from 'styled-components';

export const PosterImage = styled.div`
  min-width: 200px;
  height: 300px;
  padding: 0;
  margin: 0;
  background: url(${props => props.poster});
  background-size: cover;
  background-position: 50%;
`;
