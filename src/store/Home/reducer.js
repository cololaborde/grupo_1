import produce from "immer/dist/immer";
import { initialState } from "./initialState";
import * as types from "./types";

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.CHANGE_FONT_INCREASE:
        draft.fontIncrease = action.increase;
        break;
      case types.SAVE_FONT_INCREASE:
        draft.fontIncrease = action.increase;
        localStorage.setItem("fontIncrease", JSON.stringify(action.increase));
        break;
      case types.RESTART_FONT_INCREASE:
        draft.fontIncrease =
          JSON.parse(localStorage.getItem("fontIncrease")) || 0;
        break;
      case types.CHANGE_HIGH_CONTRAST:
        draft.highContrast = action.new_value;
        break;
      case types.SAVE_HIGH_CONTRAST:
        draft.highContrast = action.new_value;
        localStorage.setItem("highContrast", JSON.stringify(action.new_value));
        break;
      case types.RESTART_HIGH_CONTRAST:
        draft.highContrast =
          JSON.parse(localStorage.getItem("highContrast")) || false;
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
      case types.SET_SHOW_DOWNLOAD_MODAL:
        draft.showDownloadModal = action.show;
        break;
    }
  });
export default homeReducer;
