/* eslint-disable no-unused-vars */
import produce from "immer/dist/immer";
import { initialState } from "./initialState";

const informationReducer = (state = initialState, action) =>
  produce(state, (draft) => {});
export default informationReducer;
