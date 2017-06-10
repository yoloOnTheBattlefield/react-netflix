import axios from 'axios';

import { FETCH_UPCOMING_MOVIES } from '../constants';

const API_KEY = 'api_key=d2788c89c4f55d19e63381c2d04593df';
const ROOT_URL = `https://api.themoviedb.org/3`;

export const fetchUpcomingMovies = () => {
  const request = axios.get(`${ROOT_URL}/movie/upcoming?${API_KEY}`);
  return {
    type: FETCH_UPCOMING_MOVIES,
    payload: request
  }
}

export const fetchTheaterMovies = () => {
  const request = axios.get(`${ROOT_URL}/discover/movie?${API_KEY}`);
  return {
    type: FETCH_UPCOMING_MOVIES,
    payload: request
  }
}
