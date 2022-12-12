import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: 20px;
  border: 1px solid #cdcdcd;
  background-color: #00aaff50;
  color: darkgrey;
  font-size: 24px;
  font-weight: 700;
  height: 100%;
  margin: 0;

  &:hover{
    background-color: #00aaff60;
  }

  &:active {
    background-color: #00aaff80;
  }
`;
