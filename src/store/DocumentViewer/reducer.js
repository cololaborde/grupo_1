import produce from "immer/dist/immer";
import { initialState } from "./initialState";
import * as types from "./types";

const documentViewerReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.SET_DATA_ARRAY:
        draft.dataArray = action.dataArray;
        break;
    }
  });

export default documentViewerReducer;
