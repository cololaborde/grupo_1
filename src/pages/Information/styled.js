import styled from "styled-components";
import { COLORS } from "../../utils/colors";

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  min-height: 100vh;
  width: 100vw;
  background-color: ${COLORS.softWhite};
`;

export const MainContainer = styled.div`
  position: relative;
  width: auto;
  max-width: 800px;
  height: auto;
  margin: auto;
  margin-top: 5%;
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.lightGray};
`;

export const BackContainer = styled.div`
  position: absolute;
  left: 15px;
  top: 15px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  width: 60%;
  @media (max-width: 767px) {
    width: 80%;
  }
  @media (max-width: 420px) {
    width: 100%;
    margin-top: 60px;
  }
`;

export const Title = styled.p`
  font-size: ${(props) => props.fontSize || "40px"};
  color: ${(props) => props.color || COLORS.black};
  font-weight: bold;
  font-family: Arial;
  margin: 15px;
`;

export const SearchContainer = styled.div`
  margin: 10px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchBar = styled.input`
  height: 36px;
  margin-right: 0px;
  font-size: 16px;
  padding: 4px;
  padding-left: 8px;
  padding-right: 0px;
  border-radius: 10px;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const NavContainer = styled.div`
  width: 100%;
  text-align: center;
`;

export const NavText = styled.p`
  font-size: ${(props) => props.fontSize || "15px"};
  color: ${(props) => props.color || COLORS.blue};
  font-weight: bold;
  font-family: Arial;
  display: inline;
  &:hover {
    cursor: pointer;
    background-color: ${COLORS.white};
    border-style: solid;
    border-width: 1px;
  }
`;

export const CardsContainer = styled.div`
  margin-bottom: 30px;
  min-width: 50%;
  @media (max-width: 767px) {
    min-width: 70%;
    margin: 0px 5% 30px;
  }
  @media (max-width: 420px) {
    min-width: 90%;
  }
`;

export const CardContainer = styled.div`
  min-height: 50px;
  margin: 15px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.white};
  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const CardText = styled.p`
  font-size: ${(props) => props.fontSize || "20px"};
  color: ${(props) => props.color || COLORS.black};
  font-weight: bold;
  font-family: Arial;
  margin: 15px;
`;

export const ContentContainer = styled.div`
  margin: 0 20px 30px 20px;
  @media (max-width: 420px) {
    margin: 0 10px 20px 10px;
  }
`;

export const Content = styled.p`
  font-size: ${(props) => props.fontSize || "15px"};
  color: ${(props) => props.color || COLORS.black};
  font-weight: bold;
  font-family: Arial;
  margin: 15px;
  @media (max-width: 420px) {
    margin: 5px;
  }
`;
