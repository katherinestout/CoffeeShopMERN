import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
  cups: [],
  cup: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        cups: action.payload
      };
    case NEW_POST:
      return {
        ...state,
        cup: action.payload
      };
    default:
      return state;
  }
}