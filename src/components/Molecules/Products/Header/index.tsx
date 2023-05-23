import React from "react";
import { HeaderStyle } from "./style";
import { Icon } from "@/components/Atoms/Icon";

export const Header: React.FC = () => {
  return (
    <HeaderStyle>
      <Icon alt="icone de ajuda" path="/help.svg"/>
      <Icon alt="icone de notificação" path="/notify.svg" />
      <Icon alt="foto do usuario" path="/user_image.svg" />
    </HeaderStyle>
  )
}