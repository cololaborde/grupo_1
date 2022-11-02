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

export const MenuContainer = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
`;

export const StartButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
