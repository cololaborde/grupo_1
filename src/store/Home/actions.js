import * as types from "./types";
import history from "../../utils/history";

export const goToInformation = () => {
  history.push("/info");
};

export const goToHome = () => {
  history.push("/home");
};

export const goToQuestion = () => {
  history.push("/pregunta");
};

export const setFontIncrease = (increase) => {
  return {
    type: types.CHANGE_FONT_INCREASE,
    increase,
  };
};

export const saveFontIncrease = (increase) => {
  return {
    type: types.SAVE_FONT_INCREASE,
    increase,
  };
};

export const restartFontIncrease = () => {
  return {
    type: types.RESTART_FONT_INCREASE,
  };
};

export const setShowExitModal = (show) => {
  return {
    type: types.SET_SHOW_EXIT_MODAL,
    show,
  };
};

export const setShowConfigModal = (show) => {
  return {
    type: types.SET_SHOW_CONFIG_MODAL,
    show,
  };
};

export const setShowHelpModal = (show) => {
  return {
    type: types.SET_SHOW_HELP_MODAL,
    show,
  };
};
