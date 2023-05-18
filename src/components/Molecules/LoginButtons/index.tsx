import React from "react";
import { LoginButtonsStyle } from "./style";
import { Button } from "@/components/Atoms/Button";

export const LoginButtons: React.FC = () => {
  return (
    <LoginButtonsStyle>
      <Button name="Entrar" />
      <span>ou</span>
      <Button name="Entrar com o Google" color="white" />
    </LoginButtonsStyle>
  )
}