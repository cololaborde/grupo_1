import styled from "styled-components";
import { Close } from "@material-ui/icons";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  top: 0;
  z-index: 1050;
  display: flex;
  align-items: center;
`;

export const Box = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  max-width: 400px;
  max-height: 250px;
  margin: 0 auto;
  padding-bottom: 5px;
  overflow-x: hidden;
  box-sizing: border-box;
  z-index: 1;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
  background-color: #e8e8e8;
  border-radius: 20px;
  box-shadow: 0 0 20px 0 rgba(10, 27, 45, 0.15);
  background: #f3f4f5;
  @media (max-width: 320px) {
    max-height: 300px;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.bg_primary};
`;

export const ModalBg = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const TopBar = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: row;
  background-color: ${(props) => props.theme.bg_primary};
`;
export const TitleContainer = styled.div`
  padding: 5px 15px;
  display: flex;
  width: auto;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  width: 100%;
  font-size: 1.25rem;
  font-weight: bold;
  font-family: Arial;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.text};
`;
export const IconContainer = styled.button`
  display: flex;
  cursor: pointer;
  right: 0;
  margin-left: auto;
  padding-right: 10px;
  text-align: right;
  border-style: none;
  background: none;
  &:focus {
    border: 2px solid ${(props) => props.theme.btn_primary};
    outline-style: solid;
    outline-color: white;
    outline-width: medium;
`;

export const CloseIcon = styled(Close)`
  color: ${(props) => props.theme.text};
`;
