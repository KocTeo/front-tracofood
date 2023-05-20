import React, { useState } from "react";
import { LoginInputsStyle } from "./style";
import { Input } from "@/components/Atoms/Input";

type LoginInputsProps = {
  getEmail: Function;
  getPassword: Function
}

export const LoginInputs: React.FC<LoginInputsProps> = ({ getEmail, getPassword }) => {
  return (
    <LoginInputsStyle>
      <Input type="text" placeholder="Seu email" getValue={getEmail} />
      <Input type="password" placeholder="senha" getValue={getPassword} />
    </LoginInputsStyle>
  )
}