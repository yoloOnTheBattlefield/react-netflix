/*
  this component renders the upcoming and the in theatres objects from the redux state
  from those objects it will map over every item in the results array and render a list of movie cards or posters
  pretty basic stuff but it just looks complicated :(
*/

import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import {
  MovieListHeader,
  MovieList,
} from './MoviesContainer.styles';
import MovieCard from './MovieCard';


const MoviesContainer = ({ collections }) => {
    if(!collections){
      return (
        <div>
          <h2>Loading...</h2>
        </div>
      )
    }

    return (
      <div>
      {
        collections.map((item, i) => {
          return (
            <StickyContainer key={i} style={{
                width: '100%',
                margin: '0 auto',
              }}
            >
              <Sticky>
                {
                  ({ isSticky, wasSticky, style, distanceFromTop, distanceFromBottom, calculatedHeight }) => {
                    return (
                      <div style={{
                          ...style,
                          zIndex: 2,
                          width: '100%',
                          background: 'white',
                          boxShadow: 'rgba(0, 0, 0, 0.1) -3px 4px 10px 1px'
                        }}
                      >
                        <MovieListHeader>
                          <h1>{item.type}</h1>
                        </MovieListHeader>
                      </div>
                    )
                  }
                }
              </Sticky>
              <MovieList>
                {
                  item.results.map(movie => {
                    return (
                      <MovieCard  key={movie.poster_path} movie={movie} />
                    )
                  })
                }
              </MovieList>
            </StickyContainer>
          )
        })
      }
      </div>
    )
}

export default MoviesContainer;
