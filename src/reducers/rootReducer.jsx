import { combineReducers } from "redux";
import activitiesReducer from "./ActivityReducers";

const rootReducer = combineReducers({
  activities: activitiesReducer,
});

export default rootReducer;
