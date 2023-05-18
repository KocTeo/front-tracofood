import React from "react";
import { ButtonStyle } from "./style";

type ButtonProps = {
  name: string;
  height?: string;
  width?: string;
}

export const Button: React.FC<ButtonProps> = ({ name,  height, width }) => {
  return (
    <ButtonStyle>{name}</ButtonStyle>
  )
}