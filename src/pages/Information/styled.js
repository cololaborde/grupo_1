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
