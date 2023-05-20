import React, { useState } from "react";
import { RegisterInputsStyle } from "./style";
import { Input } from "@/components/Atoms/Input";

type RegisterInputsProps = {
  getEmail: Function;
  getPassword: Function
}

export const RegisterInputs: React.FC<RegisterInputsProps> = ({ getEmail, getPassword }) => {
  return (
    <RegisterInputsStyle>
      <Input type="text" placeholder="Nome Completo" getValue={getEmail} />
      <Input type="text" placeholder="Seu email" getValue={getEmail} />
      <Input type="password" placeholder="senha" getValue={getPassword} />
      <Input type="password" placeholder="confirme a senha" getValue={getPassword} />
    </RegisterInputsStyle>
  )
}