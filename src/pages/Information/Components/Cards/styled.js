import styled from "styled-components";

export const CardsContainer = styled.div`
  margin-bottom: 30px;
  min-width: 50%;
  @media (max-width: 767px) {
    min-width: 70%;
    margin: 0px 5% 30px;
  }
  @media (max-width: 420px) {
    min-width: 90%;
  }
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CardContainer = styled.button`
  min-height: 50px;
  width: 100%;
  margin: 0px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) => props.theme.btn_primary};
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.bg_secondary};
  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
  &:focus {
    border: 2px solid ${(props) => props.theme.btn_primary};
    outline-style: solid;
    outline-color: white;
    outline-width: medium;
  }
`;

export const CardText = styled.h2`
  font-size: ${(props) => props.fontSize || "20px"};
  color: ${(props) => props.color || props.theme.text};
  font-weight: bold;
  font-family: Arial;
  margin: 15px;
`;
