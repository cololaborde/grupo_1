import * as types from "./types";
import history from "../../utils/history";

export const goToInformation = () => {
  history.push("/info");
};

export const goToInformationPage = (page) => {
  history.push("/info/" + page);
};

export const goToHome = () => {
  history.push("/home");
};

export const goToQuestion = () => {
  history.push("/pregunta");
};

export const goToIntro = () => {
  history.push("/intro");
};

export const goToQuestionTutorial = () => {
  history.push("/tutorial/pregunta");
};

export const goToInformationTutorial = () => {
  history.push("/tutorial/info");
};

export const goToInformationTutorialPage = (page) => {
  history.push("/tutorial/info/" + page);
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

export const setHighContrast = (new_value) => {
  return {
    type: types.CHANGE_HIGH_CONTRAST,
    new_value,
  };
};

export const saveHighContrast = (new_value) => {
  return {
    type: types.SAVE_HIGH_CONTRAST,
    new_value,
  };
};

export const restartHighContrast = () => {
  return {
    type: types.RESTART_HIGH_CONTRAST,
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

export const setShowDownloadModal = (show) => {
  return {
    type: types.SET_SHOW_DOWNLOAD_MODAL,
    show,
  };
};

export const setShowQuestionTutorial = (show) => {
  return {
    type: types.SET_SHOW_QUESTION_TUTORIAL,
    show,
  };
};

export const setShowInformationTutorial = (show) => {
  return {
    type: types.SET_SHOW_INFORMATION_TUTORIAL,
    show,
  };
};
