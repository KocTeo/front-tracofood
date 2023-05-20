import { LoginButtons } from "@/components/Molecules/LoginButtons";
import { LoginHead } from "@/components/Molecules/LoginHead";
import { LoginInputs } from "@/components/Molecules/LoginInputs";
import React, { useState } from "react";
import { LoginContainerStyle } from "./style";

export const LoginContainer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const getEmail = (value: string) => {
    setEmail(value);
  }

  const getPassword = (value: string) => {
    setPassword(value);
  }

  return (
    <LoginContainerStyle>
      <LoginHead />
      <br />
      <LoginInputs getEmail={getEmail} getPassword={getPassword} />
      <br />
      <LoginButtons email={email} />
    </ LoginContainerStyle>
  )
}