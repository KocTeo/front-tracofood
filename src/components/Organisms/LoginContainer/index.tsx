import { LoginButtons } from "@/components/Molecules/LoginButtons";
import { LoginHead } from "@/components/Molecules/LoginHead";
import { LoginInputs } from "@/components/Molecules/LoginInputs";
import React from "react";
import { LoginContainerStyle } from "./style";

export const LoginContainer: React.FC = () => {
  return (
    <LoginContainerStyle>
      <LoginHead />
      <br />
      <LoginInputs />
      <br />
      <LoginButtons />
    </ LoginContainerStyle>
  )
}