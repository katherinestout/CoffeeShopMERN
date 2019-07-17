import { FETCH_COFFEE, NEW_COFFEE } from '../actions/types';

const initialState = {
  cups: [],
  cup: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_COFFEE:
      return {
        ...state,
        cups: action.payload
      };
    case NEW_COFFEE:
      return {
        ...state,
        cup: action.payload
      };
    default:
      return state;
  }
}