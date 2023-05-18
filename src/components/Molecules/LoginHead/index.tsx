import React from "react";
import { LoginHeadStyle } from "./style";

export const LoginHead: React.FC = () => {
  return (
    <LoginHeadStyle>
      <h2>Bem Vindo!</h2>
      <span>faça o login para continuar</span>
    </LoginHeadStyle>  
  )
}