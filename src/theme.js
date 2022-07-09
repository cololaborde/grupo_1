export const theme = (highContrast = false) => {
  if (highContrast) {
    // High Contrast Theme
    return {
      white: "#ffffff",
      primary: "",
      secondary: "",
      error: "#F56666",
      link: "#37cae6",
      text: "#000000",
      bg_primary: "#DAE1F2",
      bg_secondary: "#E3E7EF",
      bg: "#BAA4E0",
      btn_primary: "#9D63CC",
      btn_secondary: "#AF9FE9",
      btn_error: "#F56666",
      btn_text: "#000000",
      correct: "#51BA51",
      incorrect: "#D13C3C",
    };
  } else {
    // Default Theme
    return {
      white: "#ffffff",
      primary: "",
      secondary: "",
      error: "#F56666",
      link: "#37cae6",
      text: "#000000",
      bg_primary: "#DAE6F2",
      bg_secondary: "#EAF3F9",
      bg: "#AFCBE9",
      btn_primary: "#49C3D1",
      btn_secondary: "#AFCBE9",
      btn_error: "#F56666",
      btn_text: "#000000",
      correct: "#51BA51",
      incorrect: "#D13C3C",
    };
  }
};
