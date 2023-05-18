import React from "react";
import { InputStyle } from "./style";

type InputProps = {
  type: string;
  placeholder: string;
  height?: string;
  width?: string;
}

export const Input: React.FC<InputProps> = ({ type, placeholder, height, width }) => {
  return (
    <InputStyle
      type={type}
      placeholder={placeholder}
      height={height}
      width={width}
    />
  )
}