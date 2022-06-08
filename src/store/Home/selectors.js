import { get } from 'lodash';

export const selectFontIncrease = (state) => get(state, 'home.fontIncrease', 0);