import { get } from "lodash";

export const selectQuestions = (state) => get(state, "question.questions", []);
