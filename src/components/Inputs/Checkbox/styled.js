import styled from "styled-components";

export const CheckboxInput = styled.input`
  transform: scale(${(props) => props.scale || 1.0});
  border-style: solid;
  border-color: ${(props) => props.theme.btn_primary};
  border-width: 10px;
  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme.btn_primary};
    background: ${(props) => props.theme.btn_primary};
    outline-style: solid;
    outline-color: white;
    outline-width: medium;
  }
`;

export const Container = styled.div`
  height: 100%;
`;
