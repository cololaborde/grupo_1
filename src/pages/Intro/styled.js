import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  min-height: 100vh;
  max-height: 200vh;
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
  min-height: 500px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.bg_primary};
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
  text-align: center;
`;

export const StartButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.p`
  font-size: ${(props) => props.fontSize || "15px"};
  color: ${(props) => props.color || props.theme.text};
  font-family: Arial;
  margin: 15px;
  padding: 20px;
  @media (max-width: 420px) {
    margin: 5px;
  }
`;

export const MenuContainer = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
`;
