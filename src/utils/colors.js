import { useSelector } from "react-redux";
import { selectHighContrast } from "../store/Home/selectors";

const highContrast = useSelector(selectHighContrast);
export const COLORS = {
  white: "#f0f0f0",
  primary: "",
  secondary: "",
  error: highContrast ? "#F56666" : "#F56666",
  link: highContrast ? "#37cae6" : "#37cae6",
  text: highContrast ? "#000000" : "#000000",
  bg_primary: highContrast ? "#d0d0d0" : "#d0d0d0",
  bg_secondary: highContrast ? "#e8e6e6" : "#e8e6e6",
  bg: highContrast ? "#e8e6e6" : "#e8e6e6",
  btn_primary: highContrast ? "#4BCCDB" : "#4BCCDB",
  btn_secondary: highContrast ? "#a0a0a0" : "#a0a0a0",
  btn_error: highContrast ? "#F56666" : "#F56666",
  btn_text: highContrast ? "#FFFFFF" : "#FF0000",
};
