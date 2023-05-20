import React from "react";
import { Button } from "@/components/Atoms/Button";
import { RegisterButtonsStyle } from "./style";
import { useRouter } from "next/router";

export const RegisterButtons: React.FC = () => {
  const route = useRouter();

  const registerLogin = () => {
    route.push('/products');
  }

  return (
    <RegisterButtonsStyle>
      <Button
        name="Entrar"
        click={registerLogin}
      />
      <span> Já tem uma conta?  <a href="/login">Entrar</a></span>
    </RegisterButtonsStyle>
  )
}