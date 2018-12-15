import {
  GET_GUIDE_LIST,
  GUIDE_LOADING,
  CLEAR_CURRENT_GUIDE
} from "./../actions/types";

const initialState = {
  guide: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GUIDE_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_GUIDE_LIST:
      return {
        ...state,
        guide: action.payload,
        loading: false
      };
    case CLEAR_CURRENT_GUIDE:
      return {
        ...state,
        guide: null
      };
    default:
      return state;
  }
}
