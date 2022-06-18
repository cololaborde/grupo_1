export const theme = (highContrast = false) => {
  if (highContrast) {
    // High Contrast Theme
    return {
      white: "#ffffff",
      primary: "",
      secondary: "",
      error: "#FF0000",
      link: "#52DBEA",
      text: "#000000",
      bg_primary: "#D0D0D0",
      bg_secondary: "#ffffff",
      bg: "#e8e6e6",
      btn_primary: "#52DBEA",
      btn_secondary: "#B4B4B4",
      btn_error: "#F4A6A6",
      btn_text: "#000000",
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
      bg_primary: "#d0d0d0",
      bg_secondary: "#e8e6e6",
      bg: "#e8e6e6",
      btn_primary: "#4BCCDB",
      btn_secondary: "#a0a0a0",
      btn_error: "#F56666",
      btn_text: "#000000",
    };
  }
};
