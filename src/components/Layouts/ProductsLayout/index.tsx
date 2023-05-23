import { NavBarContainer } from "@/components/Organisms/NavBarContainer";
import { ProductsContainer } from "@/components/Organisms/ProductsContainer";
import React from "react";
import { ProductsLayoutStyle } from "./style";

export const ProductLayout: React.FC = () => {
  return (
    <ProductsLayoutStyle>
      <NavBarContainer />
      <ProductsContainer />
    </ProductsLayoutStyle>
  )
}