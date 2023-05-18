import React from "react";
import { LoginInputsStyle } from "./style";
import { Input } from "@/components/Atoms/Input";

export const LoginInputs: React.FC = () => {
  return (
    <LoginInputsStyle>
      <Input type="text" placeholder="Seu email" />
      <Input type="password" placeholder="senha" />
    </LoginInputsStyle>
  )
}