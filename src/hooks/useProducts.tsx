import { useState, useEffect } from "react";
export default function useProducts(id?: string) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async function getData() {
      if (id) {
        const data = await fetch(`https://fakestoreapi.com/products/${id}`);
        const products = await data.json();
        const clothing = products.filter(
          (product: { category: string }) =>
            product.category === `men's clothing` ||
            product.category === `women's clothing`
        );
        setProducts(clothing);
      } else {
        const data = await fetch("https://fakestoreapi.com/products/");
        const products = await data.json();
        const clothing = products.filter(
          (product: { category: string }) =>
            product.category === `men's clothing` ||
            product.category === `women's clothing`
        );
        setProducts(clothing);
      }
    })();
  }, [id]);
  return products;
}
