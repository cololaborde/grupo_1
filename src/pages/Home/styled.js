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

export const Container = styled.div`
  position: relative;
  width: auto;
  max-width: 500px;
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

export const InfoButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
  width: auto;
  min-width: 150px;
`;

export const InfoContainer = styled.div`
  min-width: 100px;
  width: auto;
  max-width: 500px;
  height: auto;
  margin: auto;
  margin-top: 20px;
  display: flex;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.bg_primary};
`;

export const ButtonContainer = styled.div`
  margin-top: 4%;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.bg_primary};
`;
