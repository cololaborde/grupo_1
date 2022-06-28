import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ConfigContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 5px;
`;

export const LineContainer = styled.div`
  width: 100%;
  display: inline-block;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-size: ${(props) => props.fontSize || "20px"};
  font-weight: bold;
  font-family: Arial;
  color: ${(props) => props.theme.text};
  float: left;
  margin-top: 3px;
  margin-bottom: auto;
  margin-left: 30px;
  max-width: 50%;
  height: 100%;
`;

export const CheckboxContainer = styled.div`
  float: right;
  margin-top: 3px;
  margin-bottom: auto;
  margin-right: 30px;
  min-width: 80px;
  display: flex;
  justify-content: center;
  max-width: 50%;
  height: ${(props) => props.height || "20px"};
`;

export const SpinbuttonContainer = styled.div`
  float: right;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 30px;
  min-width: 80px;
  display: flex;
  justify-content: center;
  max-width: 50%;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
