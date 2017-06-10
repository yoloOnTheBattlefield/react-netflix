import { FETCH_UPCOMING_MOVIES } from '../constants';

export default function reducer(state = {}, action){
  switch (action.type) {
    case FETCH_UPCOMING_MOVIES:
      return Object.assign({}, state, {upcomingMovies: action.payload.data.results});
    default:
      return state;
  }
}
