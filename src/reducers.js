/*
Combine all reducers in this file and export the combined reducers.
*/

import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import history from "./utils/history";
import homeReducer from "./store/Home/reducer";
import questionReducer from "./store/Question/reducer";

/*
Merges the main reducer with the router state and dynamically injected reducers
*/

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    home: homeReducer,
    question: questionReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}
