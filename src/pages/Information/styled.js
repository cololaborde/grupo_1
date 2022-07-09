import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.bg};
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
  background-color: ${(props) => props.theme.bg_primary};
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

export const Title = styled.h1`
  font-size: ${(props) => props.fontSize || "40px"};
  color: ${(props) => props.color || props.theme.text};
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
  margin-left: 5px;
  font-size: 16px;
  padding: 4px;
  padding-left: 8px;
  padding-right: 0px;
  border-radius: 10px;
  border-width: 2px;
  border-style: solid;
  border-color: black;
  &:focus {
    border: 2px solid black;
    outline-style: solid;
    outline-color: white;
    outline-width: medium;
  }
`;

export const NavContainer = styled.nav`
  width: 100%;
  text-align: center;
`;

export const NavText = styled.button`
  font-size: ${(props) => props.fontSize || "15px"};
  color: ${(props) => props.color || props.theme.btn_text};
  font-weight: bold;
  font-family: Arial;
  display: inline;
  background-color: ${(props) => props.theme.btn_primary};
  border-radius: 2px;
  border-style: none;
  padding: 2px;
  &:hover {
    cursor: pointer;
    border-style: solid;
    border-width: 2px;
  }
  &:focus {
    border: 2px solid black;
    outline-style: solid;
    outline-color: white;
    outline-width: medium;
  }
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
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

export const CardContainer = styled.button`
  min-height: 50px;
  width: 100%;
  margin: 15px 0px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border-width: 2px;
  border-style: solid;
  border-color: black;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.bg_secondary};
  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
  &:focus {
    border: 2px solid black;
    outline-style: solid;
    outline-color: white;
    outline-width: medium;
  }
`;

export const CardText = styled.h2`
  font-size: ${(props) => props.fontSize || "20px"};
  color: ${(props) => props.color || props.theme.text};
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

export const ContentTitle = styled.h2`
  font-size: ${(props) => props.fontSize || "40px"};
  color: ${(props) => props.color || props.theme.text};
  font-weight: bold;
  font-family: Arial;
  margin: 15px;
`;

export const SecondContentTitle = styled.h3`
  font-size: ${(props) => props.fontSize || "30px"};
  color: ${(props) => props.color || props.theme.text};
  font-weight: bold;
  font-family: Arial;
  margin: 15px;
  @media (max-width: 420px) {
    margin: 5px;
  }
`;

export const ThirdContentTitle = styled.h4`
  font-size: ${(props) => props.fontSize || "20px"};
  color: ${(props) => props.color || props.theme.text};
  font-weight: bold;
  font-family: Arial;
  margin: 15px;
  @media (max-width: 420px) {
    margin: 5px;
  }
`;

export const Content = styled.div``;

export const ContentText = styled.p`
  font-size: ${(props) => props.fontSize || "15px"};
  color: ${(props) => props.color || props.theme.text};
  font-family: Arial;
  margin: 15px;
  @media (max-width: 420px) {
    margin: 5px;
  }
`;

export const ContentList = styled.li`
  font-size: ${(props) => props.fontSize || "15px"};
  color: ${(props) => props.color || props.theme.text};
  font-family: Arial;
  margin: 15px;
  @media (max-width: 420px) {
    margin: 5px;
  }
`;

export const ButtonContainer = styled.div`
  margin-bottom: 15px;
`;
