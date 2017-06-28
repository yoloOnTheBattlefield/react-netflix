import { GET_MOVIE } from '../constants';

const intialState = {
  movie: {}
}

export default function (state = intialState , action){
  switch (action.type) {
    case GET_MOVIE:
      return {
        ...state,
        movie: action.payload.data
      };
    default:
      return state;
  }
}
