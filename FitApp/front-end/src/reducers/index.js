import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import progressReducer from "./progressReducer";
import foodReducer from "./foodReducer";
import guideReducer from "./guideReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  progress: progressReducer,
  food: foodReducer,
  guide: guideReducer
});
