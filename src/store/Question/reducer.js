import produce from "immer/dist/immer";
import { initialState } from "./initialState";
import * as types from "./types";

const questionReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.SET_INDEX:
        draft.index = action.index;
        break;
      case types.SET_CURRENT_QUESTION:
        draft.currentQuestion = action.currentQuestion;
        break;
      case types.SET_SELECTED_ANSWER:
        draft.selectedAnswer = action.selectedAnswer;
        break;
      case types.SET_WELL_ANSWERED:
        draft.wellAnswered = action.wellAnswered;
        break;
      case types.SET_ANSWERED:
        draft.answered = action.answ;
        break;
      case types.SET_FINISHED:
        draft.finished = action.finished;
        break;
      case types.INITIAL_STATE:
        draft.index = 0;
        draft.currentQuestion = draft.questions[0];
        draft.selectedAnswer = null;
        draft.wellAnswered = 0;
        draft.answered = false;
        draft.finished = false;
        break;
    }
  });
export default questionReducer;
