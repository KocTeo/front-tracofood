import React from "react";
import { Logo } from "@/components/Molecules/Products/Logo";
import { NavBar } from "@/components/Molecules/Products/NavBar";
import { NavBarContainerStyle } from "./style";

export const NavBarContainer: React.FC = () => {
  return (
    <NavBarContainerStyle>
      <Logo />
      <NavBar />
    </NavBarContainerStyle>
  )
}