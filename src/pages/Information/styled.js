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
  border-color: ${(props) => props.theme.btn_primary};
  background-color: ${(props) => props.theme.bg_secondary};
  &:focus {
    border: 2px solid ${(props) => props.theme.btn_primary};
    outline-style: solid;
    outline-color: white;
    outline-width: medium;
  }
`;

export const NavContainer = styled.nav`
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
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
    border: 2px solid ${(props) => props.theme.bg_secondary};
  }
  &:focus {
    border: 2px solid ${(props) => props.theme.bg_secondary};
    outline-style: solid;
    outline-color: white;
    outline-width: medium;
  }
`;
