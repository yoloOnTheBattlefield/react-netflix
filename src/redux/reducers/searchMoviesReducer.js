import { SEARCH_MOVIE } from '../constants';

const initialState = {
  results: []
}


export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIE:
      return Object.assign({}, state, {results: action.payload.data.results});
    default:
      return state;
  }
}
