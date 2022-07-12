import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  width: 100%;
  margin-top: 60px;
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
  margin: 0 30px auto;
  height: auto;
  width: 25%;
  background: none;
  padding: 0px;
  @media (max-width: 767px) {
    margin: 0 10px auto;
    width: 40%;
  }
  border-style: ${(props) => (props.selected ? "solid" : "none")};
  border-color: ${(props) => props.theme.btn_primary};
  border-width: 5px;
  &:hover {
    cursor: pointer;
    transform: translateY(-3px);
  }
  &:focus {
    border: 3px solid
      ${(props) =>
        props.selected ? props.theme.btn_primary : props.theme.btn_secondary};
    outline-style: solid;
    outline-color: white;
    outline-width: medium;
  }
`;

export const AnswerTitle = styled.div`
  font-size: ${(props) => props.fontSize || "20px"};
  font-family: Arial;
  color: ${(props) => props.color || props.theme.text};
  background-color: ${(props) => props.backgroundColor || "none"};
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

export const ResultTitle = styled.h2`
  font-size: ${(props) => props.fontSize || "40px"};
  color: ${(props) => props.color || props.theme.text};
  font-weight: bold;
  font-family: Arial;
`;

export const ResultTip = styled.p`
  margin: 15px 0;
  font-size: ${(props) => props.fontSize || "20px"};
  font-family: Arial;
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
