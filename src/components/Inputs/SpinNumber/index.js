import React from "react";
import { useSelector } from "react-redux";
import { selectFontIncrease } from "../../../store/Home/selectors";
import AddButton from "../../Buttons/AddButton";
import SubButton from "../../Buttons/SubButton";
import { Wrapper, Value } from "./styled";

const SpinNumber = (props) => {
  const fontIncrease = useSelector(selectFontIncrease);

  return (
    <Wrapper>
      <Value fontSize={15 + Number(fontIncrease) * 2 + "px"}>
        {props.value}
      </Value>
      <AddButton
        padding="0px"
        name={props.name}
        hidden={props.hidden}
        onSubmit={props.onAdd}
      ></AddButton>
      <SubButton
        padding="0px"
        name={props.name}
        hidden={props.hidden}
        onSubmit={props.onSub}
      ></SubButton>
    </Wrapper>
  );
};

export default SpinNumber;
