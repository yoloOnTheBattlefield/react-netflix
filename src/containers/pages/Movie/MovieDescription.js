import React from 'react';
import { Content } from '../Pages.styles';
import {
  Container,
  Title
} from './MovieDescription.styles';

const MovieDescription = ({movie}) => {
  const {
    budget,
    belongs_to_collection,
    homepage,
    overview,
    release_date,
    runtime,
    status,
    tagline,
    title,
    vote_average
} = movie;

  return (
    <Content>
      <Container>
        <Title><h1>{title}</h1></Title>
      </Container>
    </Content>
  )
}

export default MovieDescription;
