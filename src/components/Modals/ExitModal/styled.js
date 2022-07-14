import styled from "styled-components";

export const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 7px;
  margin-top: 20px;
  padding: 20px 0 20px 0;
  margin-bottom: 10px;
  flex-wrap: wrap;
`;
export const Text = styled.p`
  margin: 0 10px;
  width: 100%;
  font-size: ${(props) => props.fontSize || "20px"};
  font-weight: bold;
  font-family: Arial;
  text-align: center;
  color: black;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 60px;
`;
