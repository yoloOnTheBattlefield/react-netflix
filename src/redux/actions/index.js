import axios from 'axios';

import {
  FETCH_UPCOMING_MOVIES,
  FETCH_IN_THEATRES,
  SEARCH_MOVIE,
  CLICKED_MOVIE
} from '../constants';

const API_KEY = 'api_key=d2788c89c4f55d19e63381c2d04593df';
const ROOT_URL = `https://api.themoviedb.org/3`;


var date = new Date();
var currentYear = date.getFullYear();

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

export const searchMovie = (query) => {
  const request = axios.get(`${ROOT_URL}/search/movie?${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`);
  return {
    type: SEARCH_MOVIE,
    payload: request
  }
}

export const clickedMovie = (movie, showModal) => {
  console.log('movie received: ', movie, showModal);
  return {
      type: CLICKED_MOVIE,
      movie,
      showModal
    }
}
