import axios from 'axios';

import {
  FETCH_UPCOMING_MOVIES,
  FETCH_IN_THEATRES,
  SEARCH_MOVIE,
  SELECTED_MOVIE,
  GET_MOVIE,
  UPDATE_INPUT_VALUE,
  CLEAR_SUGGESTIONS,
  LOAD_SUGGESTIONS_BEGIN,
  UPDATE_SUGGESTIONS,
} from '../constants';

var date = new Date();
var currentYear = date.getFullYear();

const API_KEY = 'api_key=d2788c89c4f55d19e63381c2d04593df';
const ROOT_URL = `https://api.themoviedb.org/3`;

export const fetchUpcomingMovies = () => {
  const request = axios.get(`${ROOT_URL}/movie/upcoming?${API_KEY}`);
  return {
    type: FETCH_UPCOMING_MOVIES,
    payload: request,
  }
}

export const fetchTheaterMovies = () => {
  const request = axios.get(`${ROOT_URL}/discover/movie?${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=${currentYear}`);
  return {
    type: FETCH_IN_THEATRES,
    payload: request
  }
}

export const selectedMovie = (movie, showModal) => {
  return {
      type: SELECTED_MOVIE,
      movie,
      showModal
    }
}

export const getMovieById = (movieId) => {
  const request = axios.get(`${ROOT_URL}/movie/${movieId}?${API_KEY}`);
  return {
    type: GET_MOVIE,
    payload: request
  }
}

/*
* Autosuggest
*/

export const loadSuggestions = (query) => {
  const request = axios.get(`${ROOT_URL}/search/movie?${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`);;
  return dispatch =>  {
    dispatch(loadSuggestionsBegin())
    dispatch(updateSuggestions(request))
  };
}

export const updateInputValue = (value) => {
  return {
    type: UPDATE_INPUT_VALUE,
    value
  };
}

export const clearSuggestions = () => {
  return {
    type: CLEAR_SUGGESTIONS
  };
}

export const loadSuggestionsBegin = () => {
  return {
    type: LOAD_SUGGESTIONS_BEGIN
  };
}

const updateSuggestions = (data) => {
  return {
    type: UPDATE_SUGGESTIONS,
    payload: data
  };
}
