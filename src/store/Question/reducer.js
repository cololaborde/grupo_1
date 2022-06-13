import produce from "immer/dist/immer";
import { initialState } from "./initialState";

const questionReducer = (state = initialState, action) =>
  produce(state, (draft) => {});
export default questionReducer;
