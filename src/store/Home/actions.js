import * as types from './types'
import history from '../../utils/history'

export const goToInformation = () => {
    history.push('/info')
}

export const goToHome = () => {
    history.push('/home')
}

export const setFontIncrease = (increase) => {
    return{
        type: types.CHANGE_FONT_INCREASE,
        increase
    }
}