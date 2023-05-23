import React from "react";
import { NavBarStyle } from "./style";
import { Link } from "@/components/Atoms/Link";

export const NavBar: React.FC = () => {
  const linkNames = [
    'Todos','Pizza', 'Sobremesa', 'Lanche', 'Açaí', 'Bebidas'
  ]
  return (
    <NavBarStyle>
      {linkNames.map((link) => (
        <div key={link}>
          <Link path={`/products`} name={link} key={link}/>
        </div>
      ))}
    </NavBarStyle>  
  )
}