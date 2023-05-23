import { Filters } from "@/components/Molecules/Products/Filters";
import { Header } from "@/components/Molecules/Products/Header";
import { ProductCard } from "@/components/Molecules/Products/ProductCard";
import React from "react";
import { ProductContainerStyle } from "./style";

export const ProductsContainer: React.FC = () => {
  return (
    <ProductContainerStyle>
      <Header />
      <Filters />
      <ProductCard />
    </ProductContainerStyle>
  )
}