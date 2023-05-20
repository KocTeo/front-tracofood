import { Logo } from "@/components/Molecules/Products/Logo";
import { NavBar } from "@/components/Molecules/Products/NavBar";
import React from "react";
import { NavBarContainerStyle } from "./style";

export const NavBarContainer: React.FC = () => {
  return (
    <NavBarContainerStyle>
      <Logo />
      <NavBar />
    </NavBarContainerStyle>
  )
}