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
