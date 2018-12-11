import {
  GET_FOOD_LIST,
  FOOD_LOADING,
  CLEAR_CURRENT_FOOD
} from "./../actions/types";

const initialState = {
  food: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FOOD_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_FOOD_LIST:
      return {
        ...state,
        food: action.payload,
        loading: false
      };
    case CLEAR_CURRENT_FOOD:
      return {
        ...state,
        food: null
      };
    default:
      return state;
  }
}
