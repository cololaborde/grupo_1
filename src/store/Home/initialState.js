export const initialState = {
  fontIncrease: JSON.parse(localStorage.getItem("fontIncrease")) || 0,
  highContrast: JSON.parse(localStorage.getItem("highContrast")) || false,
  showExitModal: false,
  showConfigModal: false,
  showHelpModal: false,
  showDownloadModal: false,
};
