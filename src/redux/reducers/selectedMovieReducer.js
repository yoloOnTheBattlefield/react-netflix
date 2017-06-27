import { SELECTED_MOVIE } from '../constants';

const intialState = {
  movie: '',
  showModal: false
}

export default function (state = intialState, action){
  switch (action.type) {
    case SELECTED_MOVIE:
      return {
        ...state,
        movie: action.movie,
        showModal: action.showModal
      };
    default:
      return state;
  }
}
