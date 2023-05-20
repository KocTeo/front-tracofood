import React from "react";
import { LoginButtonsStyle } from "./style";
import { Button } from "@/components/Atoms/Button";
import { useRouter } from "next/router";

type LoginButtonsProps = {
  email: string;
}

export const LoginButtons: React.FC<LoginButtonsProps> = ({ email }) => {
  const route = useRouter();

  const checkEmail = () => {
    if(email.includes('adm')) {
      return route.push('/adm/products')
    }
    console.log('sem adm no email');
  }

  const googleLogin = () => {}

  return (
    <LoginButtonsStyle>
      <Button
        name="Entrar"
        click={checkEmail}
      />
      <span>ou</span>
      <Button
        name="Entrar com o Google"
        color="white"
        click={googleLogin}
      />
      <span>Não tem uma conta? <a href="/register">Cadastre</a></span>
    </LoginButtonsStyle>
  )
}