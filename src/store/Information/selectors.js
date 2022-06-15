import { get } from "lodash";

export const selectInformation = (state) => get(state, "information", []);
