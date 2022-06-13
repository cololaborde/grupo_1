export const initialState = {
  fontIncrease: JSON.parse(localStorage.getItem("fontIncrease")) || 0,
  showExitModal: false,
  showConfigModal: false,
  showHelpModal: false,
};
