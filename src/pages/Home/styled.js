import styled from "styled-components";
import { COLORS } from "../../utils/colors";

export const Wrapper = styled.div `
    height: 100%;
    width: 100%;
`

export const TitleContainer = styled.div `
    display: flex;
    `

export const Title = styled.p `
    font-size: 40px;
    color: ${(props) => props.color || COLORS.blue};
    font-weight: bold;
    font-family: Arial;
`

export const ConfigContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;

`
export const TextContainer = styled.div `
    display: flex;
    flex-direction: column;
`
export const Text = styled.p `
    font-size: 20px;
    font-weight: bold;
    font-family: Arial;
    color: ${(props) => props.color || 'blue'};
`

export const InputsContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 100px;
`

export const CheckboxContainer = styled.div `
    margin-top: 35px;
`

export const RangeBarContainer = styled.div `
    margin-bottom: 5px;
`

export const ButtonContainer = styled.div `
    display: flex;
    flex-direction: space-between;
    padding: 10px;
    width: auto;
    min-width: 130px;
`

export const Container = styled.div `
    width: auto;
    max-width: 500px;
    height: auto;
    margin: auto;
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
    background-color: ${COLORS.softWhite}
`

export const InfoButtonContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: auto;
    min-width: 150px;
`

export const InfoContainer = styled.div `
    width: auto;
    max-width: 300px;
    height: auto;
    margin: auto;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
    background-color: ${COLORS.softWhite}
`