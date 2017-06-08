import { FETCH_MOVIES } from '../constants';

export default function reducer(state = {}, action){
  switch (action.type) {
    case FETCH_MOVIES:
      return Object.assign({}, state, {movie: action.payload.data});
    default:
      return state;
  }
}
