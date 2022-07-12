import styled from "styled-components";

export const SpinbuttonInput = styled.input`
  font-size: ${(props) => props.fontSize || "20px"};
  border: 2px solid ${(props) => props.theme.btn_primary};
  &:focus {
    border: 2px solid ${(props) => props.theme.btn_primary};
    outline-style: solid;
    outline-color: white;
    outline-width: medium;
  }
`;
