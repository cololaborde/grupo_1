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
  text-align: center;
`;

export const AnswersContainer = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

export const Answer = styled.button`
  text-align: center;
  margin: 0 50px auto;
  height: auto;
  width: 20%;
  border-style: none;
  background: none;
  padding: 0px;
  @media (max-width: 767px) {
    margin: 0 10px auto;
    width: 40%;
  }
  ${(props) => (props.selected ? "border: 5px solid green;" : "")}
  &:hover {
    cursor: pointer;
    transform: translateY(-3px);
  }
  &:focus {
    border: 3px solid ${(props) => (props.selected ? "green" : "black")};
    outline-style: solid;
    outline-color: white;
    outline-width: medium;
  }
`;

export const AnswerTitle = styled.div`
  font-size: ${(props) => props.fontSize || "20px"};
  font-family: Arial;
  color: ${(props) => props.color || props.theme.text};
`;

export const AnswerImage = styled.img`
  width: 100%;
  height: 200px;
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  @media (max-width: 767px) {
    width: 90%;
  }
`;

export const SendButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ResultTitle = styled.div`
  font-size: ${(props) => props.fontSize || "40px"};
  color: ${(props) => props.color || props.theme.text};
  font-weight: bold;
  font-family: Arial;
`;

export const ResultTip = styled.div`
  margin: 15px 0;
  font-size: ${(props) => props.fontSize || "20px"};
  color: ${(props) => props.color || props.theme.text};
  text-align: center;
`;

export const ResultButtons = styled.div`
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CounterContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.bg_primary};
  border-radius: 10px;
  padding: 5px;
  margin: 0 5px 6px;
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const Text = styled.p`
  font-size: ${(props) => props.fontSize || "20px"};
  font-family: Arial;
  color: ${(props) => props.theme.text};
  margin-top: 3px;
  max-width: 50%;
  height: 100%;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  bottom: 0;
  position: absolute;
`;
