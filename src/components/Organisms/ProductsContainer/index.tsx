import { Filters } from "@/components/Molecules/Products/Filters";
import { Header } from "@/components/Molecules/Products/Header";
import { ProductCard } from "@/components/Molecules/Products/ProductCard";
import React, { useEffect, useState } from "react";
import { ProductContainerStyle } from "./style";

export const ProductsContainer: React.FC = () => {
  const [products, setProducts] = useState([{
    name: '', description: '', image: '', price: 0
  }]);

  const [order, setOrder] = useState(false);

  const orderProducts = async () => {
    setOrder(!order);
  }

  useEffect(() => {
    if (!order) {
      const response = fetch('/products_data.json')
      .then((res) => res.json());

      response.then((data) => setProducts(data.products))
    } else {
      const response = fetch('/products_alpha_order.json')
      .then((res) => res.json());

      response.then((data) => setProducts(data.products))
    }
  }, [order])

  return (
    <ProductContainerStyle>
      <Header />
      <Filters filter={orderProducts} />
      <ProductCard products={products} />
    </ProductContainerStyle>
  )
}