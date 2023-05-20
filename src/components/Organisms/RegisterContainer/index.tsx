import React, { useState } from "react";
import { RegisterContainerStyle } from "./style";
import { RegisterHead } from "@/components/Molecules/Register/RegisterHead";
import { RegisterInputs } from "@/components/Molecules/Register/RegisterInputs";
import { RegisterButtons } from "@/components/Molecules/Register/RegisterButtons";

export const RegisterContainer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const getEmail = (value: string) => {
    setEmail(value);
  }

  const getPassword = (value: string) => {
    setPassword(value);
  }

  return (
    <RegisterContainerStyle>
      <RegisterHead />
      <br />
      <RegisterInputs getEmail={getEmail} getPassword={getPassword}/>
      <br />
      <RegisterButtons />
    </ RegisterContainerStyle>
  )
}