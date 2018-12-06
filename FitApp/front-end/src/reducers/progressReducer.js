import {
  PROGRESS_LOADING,
  GET_PROGRESS,
  CLEAR_CURRENT_PROGRESS
} from "./../actions/types";

const initialState = {
  progress: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PROGRESS_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_PROGRESS:
      return {
        ...state,
        progress: action.payload,
        loading: false
      };
    case CLEAR_CURRENT_PROGRESS:
      return {
        ...state,
        progress: null
      };
    default:
      return state;
  }
}
