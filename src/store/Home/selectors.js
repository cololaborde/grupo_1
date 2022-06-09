import { get } from 'lodash';

export const selectFontIncrease = (state) => get(state, 'home.fontIncrease', 0);
export const selectShowExitModal = (state) => get(state, 'home.showExitModal', false);