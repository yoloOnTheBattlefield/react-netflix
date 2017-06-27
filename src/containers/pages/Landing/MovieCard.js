import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Title,
  Poster,
  Info,
  StyledIcon
} from './MovieCard.styles';

const MovieCard = ({ movie }) => {
  return(
    <Container>
      <Title>
        <h1>{movie.title}</h1>
        <h2>Released {movie.release_date}</h2>
      </Title>
      <Poster poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
      <Info>

          {
            movie.vote_average ?
            <h2>{movie.vote_average} <StyledIcon name='star-o' /></h2> :
            null
          }

        <h2>
          <Link to={`/movie/${movie.id}`}>
            <StyledIcon name='film' />
          </Link>
        </h2>
        <h2><StyledIcon name='twitter' /></h2>
      </Info>
    </Container>
  )
}

export default MovieCard;
