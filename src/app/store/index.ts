import { combineReducers } from "redux";
import { stylesSettingsReducer } from "./reducers/stylesSettings";

const reducers = combineReducers({
  stylesSettingsReducer: stylesSettingsReducer,
});

export default reducers;
