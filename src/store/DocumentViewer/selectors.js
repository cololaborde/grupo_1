import { get } from "lodash";

export const selectDataArray = (state) =>
  get(state, "viewerReducer.dataArray", []);
