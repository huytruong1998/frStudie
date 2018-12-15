import axios from "axios";

import {
  GET_PROGRESS,
  PROGRESS_LOADING,
  CLEAR_CURRENT_PROGRESS,
  GET_ERRORS
} from "./types";

// Get current Progress
export const getCurrentProgress = () => dispatch => {
  dispatch(setProgressLoading());
  axios
    .get("/api/goal")
    .then(res =>
      dispatch({
        type: GET_PROGRESS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROGRESS,
        payload: {}
      })
    );
};

// Create Progress
export const createProgress = (progressData, history) => dispatch => {
  axios
    .post("/api/goal", progressData)
    .then(res => history.push("/layout/progress"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Progress loading
export const setProgressLoading = () => {
  return {
    type: PROGRESS_LOADING
  };
};

// Clear progress
export const clearCurrentProgress = () => {
  return {
    type: CLEAR_CURRENT_PROGRESS
  };
};
