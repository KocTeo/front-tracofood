import React from "react";
import { ProductCardStyle } from "./style";
import { Icon } from "@/components/Atoms/Icon";
import { Button } from "@/components/Atoms/Button";

export const ProductCard: React.FC = () => {
  const test = () => {
    console.log('test');
    
  }

  return (
    <ProductCardStyle>
      <div className="img_description">
        <Icon
          alt="foto da comida"
          path="/placeholder_product.svg"
          width="100px"
          height="100px"
        />
        <div>
          <h3>Nome do Produto</h3>
          <span>(Descrição do Produto com ingredientes)</span>
        </div>
      </div>
      <div className="price_edit">
        <span>R$60,00</span>
        <Button click={test} name="Editar" />
      </div>
    </ProductCardStyle>
  )
}