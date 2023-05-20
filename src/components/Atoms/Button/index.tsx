import React from "react";
import { ButtonStyle } from "./style";

type ButtonProps = {
  name: string;
  height?: string;
  width?: string;
  color?: string;
  click: Function;
}

export const Button: React.FC<ButtonProps> = ({ name,  height, width, color, click }) => {
  return (
    <ButtonStyle color={color} onClick={() => click()}>{name}</ButtonStyle>
  )
}