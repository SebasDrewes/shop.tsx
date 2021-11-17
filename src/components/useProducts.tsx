import { useState, useEffect } from "react";

export default function useProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async function getData() {
      const data = await fetch("https://fakestoreapi.com/products/");
      const products = await data.json();
      setProducts(products);
    })();
  }, []);
  return products;
}
