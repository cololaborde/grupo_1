import produce from "immer/dist/immer";
import { initialState } from "./initialState";
import * as types from "./types";

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.CHANGE_FONT_INCREASE:
        draft.fontIncrease = action.increase;
        break;
      case types.SET_SHOW_EXIT_MODAL:
        draft.showExitModal = action.show;
        break;
      case types.SET_SHOW_CONFIG_MODAL:
        draft.showConfigModal = action.show;
        break;
      case types.SET_SHOW_HELP_MODAL:
        draft.showHelpModal = action.show;
        break;
    }
  });
export default homeReducer;
