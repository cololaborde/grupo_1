export const theme = (highContrast = false) => {
  if (highContrast) {
    // High Contrast Theme
    return {
      white: "#ffffff",
      primary: "",
      secondary: "",
      error: "#ED7D7D",
      link: "#37cae6",
      text: "#000000",
      bg_primary: "#E7ECF3",
      bg_secondary: "#F5FBFF",
      bg: "#99BEE5",
      btn_primary: "#76CCD5",
      btn_secondary: "#AFCBE9",
      btn_error: "#ED7D7D",
      btn_text: "#000000",
      correct: "#65C365",
      incorrect: "#ED7D7D",
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
      incorrect: "#F56666",
    };
  }
};
