import React from "react";
import { HeaderStyle } from "./style";
import { Icon } from "@/components/Atoms/Icon";
import { useRouter } from "next/router";

export const Header: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <HeaderStyle>
      {pathname.includes('adm') ? (<Icon alt="icone de ajuda" path="/help.svg"/>) : (<Icon alt="icone do carrinho" path="/cart.svg" />)}
      <Icon alt="icone de notificação" path="/notify.svg" />
      <Icon alt="foto do usuario" path="/user_image.svg" />
    </HeaderStyle>
  )
}