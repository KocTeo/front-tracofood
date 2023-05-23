import React from "react";
import { LogoStyle } from "./style";
import { Icon } from "@/components/Atoms/Icon";

export const Logo: React.FC = () => {
  return (
    <LogoStyle>
      <Icon path="/tegrafood.svg" alt="Logo Tegrafood" width="170px" height="140px"/>
    </LogoStyle> 
  )
}