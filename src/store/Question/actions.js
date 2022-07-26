import * as types from "./types";

export const setIndex = (index) => {
  return {
    type: types.SET_INDEX,
    index,
  };
};

export const setCurrentQuestion = (currentQuestion) => {
  return {
    type: types.SET_CURRENT_QUESTION,
    currentQuestion,
  };
};

export const setSelectedAnswer = (selectedAnswer) => {
  return {
    type: types.SET_SELECTED_ANSWER,
    selectedAnswer,
  };
};

export const setWellAnswered = (wellAnswered) => {
  return {
    type: types.SET_WELL_ANSWERED,
    wellAnswered,
  };
};

export const setAnswered = (answ) => {
  return {
    type: types.SET_ANSWERED,
    answ,
  };
};

export const setFinished = (finished) => {
  return {
    type: types.SET_FINISHED,
    finished,
  };
};

export const restoreToInitialState = () => {
  return {
    type: types.INITIAL_STATE,
  };
};
