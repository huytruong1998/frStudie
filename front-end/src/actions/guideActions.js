import axios from "axios";
import { GET_GUIDE_LIST, GUIDE_LOADING, CLEAR_CURRENT_GUIDE } from "./types";

//GET all food
export const getCurrentGuide = () => dispatch => {
  dispatch(setGuideLoading());
  axios
    .get("/api/guide")
    .then(res =>
      dispatch({
        type: GET_GUIDE_LIST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_GUIDE_LIST,
        payload: {}
      })
    );
};

// Food loading
export const setGuideLoading = () => {
  return {
    type: GUIDE_LOADING
  };
};

// Clear Guide
export const clearCurrentGuide = () => {
  return {
    type: CLEAR_CURRENT_GUIDE
  };
};
