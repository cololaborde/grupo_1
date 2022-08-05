import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 58px;
`;

export const Button = styled.button`
  height: 100%;
  border-radius: 10px;
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) => props.theme.btn_primary};
  color: ${(props) => props.theme.btn_primary};
  font-weight: bold;
  background-color: ${(props) =>
    props.backgroundColor || props.theme.bg_secondary};
  font-size: ${(props) => props.fontSize || "12px"};
  text-align: center;
  padding: 10px;
  margin: 5px 5px;
  font-size: small;
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
    border: 2px solid ${(props) => props.theme.btn_primary};
    outline-style: solid;
    outline-color: white;
    outline-width: medium;
  }
`;
