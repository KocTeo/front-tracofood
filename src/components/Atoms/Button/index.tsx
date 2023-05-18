import React from "react";
import { ButtonStyle } from "./style";

type ButtonProps = {
  name: string;
  height?: string;
  width?: string;
  color?: string;
}

export const Button: React.FC<ButtonProps> = ({ name,  height, width, color }) => {
  return (
    <ButtonStyle color={color}>{name}</ButtonStyle>
  )
}