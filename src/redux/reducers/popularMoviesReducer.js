import { FETCH_POPULAR_MOVIES } from '../constants';

export default function reducer(state = {}, action){
  switch (action.type) {
    case FETCH_POPULAR_MOVIES:
      return Object.assign({}, state, {popularMovies: action.payload.data.results});
    default:
      return state;
  }
}
