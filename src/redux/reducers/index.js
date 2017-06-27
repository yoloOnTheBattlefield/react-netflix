import { combineReducers } from 'redux';
import upcomingMovies from './upcomingMoviesReducer';
import inTheatres from './theatreMoviesReducer';
import searchMovies from './searchMoviesReducer';
import getMovie from './getMovieReducer';

import selectedMovie from './selectedMovieReducer';
import suggestions from './autosuggestionReducer';

const collections = combineReducers({
  upcomingMovies,
  inTheatres,
});

export default combineReducers({
  searchMovies,
  collections,
  selectedMovie,
  getMovie,
  suggestions
});
