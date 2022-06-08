import styled from "styled-components";
import { COLORS } from "../../utils/colors";

export const Wrapper = styled.div `
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: ${COLORS.softWhite};
`

export const MainContainer = styled.div `
    position: relative;
    width: auto;
    max-width: 800px;
    height: auto;
    margin: auto;
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    background-color: ${COLORS.lightGray}
`

export const BackContainer = styled.div `
    position: absolute;
    left: 15px;
    top: 15px;
` 

export const MenuContainer = styled.div `
    position: absolute;
    right: 15px;
    top: 15px;
`

export const TitleContainer = styled.div `
`

export const Title = styled.p `
    font-size: 40px;
    color: ${(props) => props.color || COLORS.black};
    font-weight: bold;
    font-family: Arial;
    margin: 15px;
`

export const SearchContainer = styled.div `
    margin: 10px;
`

export const SearchBar = styled.input `
    height: 24px;
    font-size: 16px;
    padding: 4px;
    padding-left: 8px;
    border-radius: 4px;
    border: none;
    &:focus {
        outline: none;
    }
`

export const CardsContainer = styled.div `
`

export const CardContainer = styled.div `
    min-width: 400px;
    min-height: 50px;
    margin: 15px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    background-color: ${COLORS.white}
`

export const CardText = styled.p `
    font-size: 20px;
    color: ${(props) => props.color || COLORS.black};
    font-weight: bold;
    font-family: Arial;
    margin: 15px;
`