/*
Combine all reducers in this file and export the combined reducers.
*/

import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import history from "./utils/history";
import homeReducer from "./store/Home/reducer";
import questionReducer from "./store/Question/reducer";
import informationReducer from "./store/Information/reducer";
import introReducer from "./store/Intro/reducer";

/*
Merges the main reducer with the router state and dynamically injected reducers
*/

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    home: homeReducer,
    question: questionReducer,
    information: informationReducer,
    intro: introReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}
