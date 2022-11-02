import { get } from "lodash";

export const selectFontIncrease = (state) => get(state, "home.fontIncrease", 0);
export const selectHighContrast = (state) =>
  get(state, "home.highContrast", false);
export const selectShowExitModal = (state) =>
  get(state, "home.showExitModal", false);
export const selectShowConfigModal = (state) =>
  get(state, "home.showConfigModal", false);
export const selectShowHelpModal = (state) =>
  get(state, "home.showHelpModal", false);
export const selectDownloadModal = (state) =>
  get(state, "home.showDownloadModal", false);
export const selectOpenModal = (state) =>
  get(state, "home.showExitModal", false) |
  get(state, "home.showConfigModal", false) |
  get(state, "home.showHelpModal", false) |
  get(state, "home.showDownloadModal", false);
export const infoGoBackHome = (state) =>
  get(state, "home.infoGoBackHome", null);
export const selectExitModalConfig = (state) =>
  get(state, "home.exitModalConfig", {});
export const selectShowQuestionTutorial = (state) =>
  get(state, "home.showQuestionTutorial", true);
export const selectShowInformationTutorial = (state) =>
  get(state, "home.showInformationTutorial", true);
