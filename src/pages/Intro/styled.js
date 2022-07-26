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
  max-width: 700px;
  height: auto;
  margin: auto;
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.bg_primary};
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  text-align: center;
  margin-left: 15px;
  margin-right: 15px;
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
`;

export const MenuContainer = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
`;

export const StartButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.p`
  font-size: ${(props) => props.fontSize || "15px"};
  color: ${(props) => props.color || props.theme.text};
  font-family: Arial;
  margin: 0 2%;
  width: auto;
  padding: 15px;
  @media (max-width: 420px) {
    padding: 5px;
  }
`;
