/* eslint-disable no-unused-vars */
import produce from "immer/dist/immer";
import { initialState } from "./initialState";

const introReducer = (state = initialState, action) =>
  produce(state, (draft) => {});
export default introReducer;
