import { combineReducers } from 'redux';
import upcomingMovies from './upcomingMoviesReducer';
import inTheatres from './theatreMoviesReducer';
import searchMovies from './searchMoviesReducer';

import clickedMovie from './clickedMovieReducer';

const collections = combineReducers({
  upcomingMovies,
  inTheatres,
});

export default combineReducers({
  searchMovies,
  collections,
  clickedMovie
})
