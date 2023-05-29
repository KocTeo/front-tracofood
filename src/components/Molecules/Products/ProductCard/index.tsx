import React, { useEffect, useState } from "react";
import { ProductCardStyle } from "./style";
import { Icon } from "@/components/Atoms/Icon";
import { Button } from "@/components/Atoms/Button";
import { useRouter } from "next/router";

type ProductCardType = {
  products: {
    name: string;
    description: string;
    price: number;
    image: string;
  }[]
}

export const ProductCard: React.FC<ProductCardType> = ({ products }) => {
  const { pathname } = useRouter();
  const test = () => {
    console.log('test');
  }

  return (
    <>
    {products.map(({ name, description, price, image }) => (
      <ProductCardStyle key={name}>
        <div className="img_description">
          <Icon
            alt="foto da comida"
            path={image}
            width="100px"
            height="100px"
          />
          <div>
            <h3>{name}</h3>
            <span>({description})</span>
          </div>
        </div>
        <div className="price_edit">
          <span>R${price}</span>
          {pathname.includes('adm') ? (<Button click={test} name="Editar" />): (<Button click={test} name="Comprar" />)}
        </div>
      </ProductCardStyle>
    ))}
    </>
  )
}