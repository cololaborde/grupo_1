export const initialState = {
  fontIncrease: JSON.parse(localStorage.getItem("fontIncrease")) || 0,
  highContrast: false,
  showExitModal: false,
  showConfigModal: false,
  showHelpModal: false,
};
