import { get } from "lodash";

export const selectQuestions = (state) => get(state, "question.questions", []);

export const selectIndex = (state) => get(state, "question.index", 0);
export const selectCurrentQuestion = (state) =>
  get(state, "question.currentQuestion", selectQuestions[selectIndex]);
export const selectSelectedAnswer = (state) =>
  get(state, "question.selectedAnswer", null);
export const selectWellAnswered = (state) =>
  get(state, "question.wellAnswered", 0);
export const selectAnswered = (state) => get(state, "question.answered", false);
export const selectFinished = (state) => get(state, "question.finished", false);
