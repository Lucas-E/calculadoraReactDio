import React from "react";
import { ButtonContainer } from "./style";
import { Fragment } from "react";
const Button = ({label, onClick}) => {
  return(
        <ButtonContainer onClick={onClick}>
            {label}
        </ButtonContainer>
  );
};

export default Button;
