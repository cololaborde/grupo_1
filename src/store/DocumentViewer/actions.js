import * as types from "./types";

export const setDataArray = (dataArray) => {
  return {
    type: types.SET_DATA_ARRAY,
    dataArray,
  };
};
