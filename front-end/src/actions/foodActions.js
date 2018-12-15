import axios from "axios";
import { GET_FOOD_LIST, FOOD_LOADING, CLEAR_CURRENT_FOOD } from "./types";

//GET all food
export const getCurrentFood = () => dispatch => {
  dispatch(setFoodLoading());
  axios
    .get("/api/addfood")
    .then(res =>
      dispatch({
        type: GET_FOOD_LIST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_FOOD_LIST,
        payload: {}
      })
    );
};

// Food loading
export const setFoodLoading = () => {
  return {
    type: FOOD_LOADING
  };
};

// Clear Food
export const clearCurrentFood = () => {
  return {
    type: CLEAR_CURRENT_FOOD
  };
};
