import styled from "styled-components";
import { COLORS } from "../../utils/colors";

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
`

export const TitleContainer = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    `

export const Title = styled.p`
    font-size: 30px;
    color: ${(props) => props.color || COLORS.blue};
    font-weight: bold;
`

export const ConfigContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`
export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const Text = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: ${(props) => props.color || 'blue'};
`

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 100px;
`

export const CheckboxContainer = styled.div`
    margin-top: 35px;
`

export const RangeBarContainer = styled.div`
    margin-bottom: 5px;
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: space-between;
    position: absolute;
    bottom: 0;
    height: 20px;
    margin-bottom: 50px;
    width: 300px;
`

export const Container = styled.div`
    width: 60%;
    height: 50%;
    margin: auto;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
    background-color: ${COLORS.softWhite}
`