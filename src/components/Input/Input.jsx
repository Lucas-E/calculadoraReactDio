import React from "react";
import { InputContainer } from "./style";
import { Fragment } from "react";

export const Input = ({value}) => {
  return (
    <Fragment>
      <InputContainer>
        <input type="text" disabled value={value}/>
      </InputContainer>
    </Fragment>
  );
};
