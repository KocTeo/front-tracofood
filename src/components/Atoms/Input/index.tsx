import React from "react";
import { InputStyle } from "./style";

type InputProps = {
  type: string;
  placeholder: string;
  height?: string;
  width?: string;
  getValue: Function; 
}

export const Input: React.FC<InputProps> = ({ type, placeholder, height, width, getValue }) => {
  return (
    <InputStyle
      type={type}
      placeholder={placeholder}
      height={height}
      width={width}
      onChange={({ target }) => getValue(target.value)}
    />
  )
}