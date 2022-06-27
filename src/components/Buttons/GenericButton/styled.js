import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const Button = styled.button`
  height: 100%;
  border-radius: 30px;
  border-width: 2px;
  border-style: solid;
  border-color: black;
  font-weight: bold;
  pointer-events: ${(props) => (props.disabled ? "none" : "")};
  color: ${(props) => props.textColor || props.theme.btn_text};
  background-color: ${(props) =>
    props.backgroundColor || props.theme.btn_primary};
  font-size: ${(props) => props.fontSize || "12px"};
  text-align: center;
  padding: 10px;
  margin: 10px;
  font-family: Arial;
  transition: all 0.2s;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
  &:focus {
    border: 2px solid black;
    outline-style: solid;
    outline-color: white;
    outline-width: medium;
  }
  &:disabled {
    opacity: 50%;
  }
`;
