import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import progressReducer from "./progressReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  progress: progressReducer
});
