import { useState, useEffect } from "react";
export default function useProducts(id?: string) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async function getData() {
      if (id) {
        const data = await fetch(`https://fakestoreapi.com/products/${id}`);
        const products = await data.json();
        setProducts(products);
      } else {
        const data = await fetch("https://fakestoreapi.com/products/");
        const products = await data.json();
        setProducts(products);
      }
    })();
  }, [id]);
  return products;
}
