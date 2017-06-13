import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import {  MovieList, MovieListHeader } from './MoviesContainer.styles';
import { black } from '../../theme/styles';
import MovieCard from '../../components/MovieCard';
import Loader from '../../components/Loader';


class MoviesContainer extends React.Component {
  render(){
    const { collections } = this.props;
    if(!collections){
      return (
        <div>
          <Loader />
        </div>
      )
    }

    return (
      <div>
      {
        collections.map((item, i) => {
          return (
            <StickyContainer key={i} style={{
                background: black,
                width: '100%',
                margin: '0 auto'
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
                  item.results.map(result => {
                    return (
                      <MovieCard key={result.poster_path} movie={result} />
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
}

export default MoviesContainer;
