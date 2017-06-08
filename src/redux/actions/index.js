import axios from 'axios';

import { FETCH_MOVIES, FETCH_POPULAR_MOVIES } from '../constants';

const API_KEY = 'api_key=d2788c89c4f55d19e63381c2d04593df';
const ROOT_URL = `https://api.themoviedb.org/3`;

export const fetchMovies = () => {
  const request = axios.get(`${ROOT_URL}${API_KEY}`);
  return {
    type: FETCH_MOVIES,
    payload: request
  }
}

export const fetchUpcomingMovies = () => {
  const request = axios.get(`${ROOT_URL}/movie/upcoming?${API_KEY}`);
  return {
    type: FETCH_POPULAR_MOVIES,
    payload: request
  }
}
