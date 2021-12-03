import { useState } from "react";
import useProducts from "../../hooks/useProducts";
import { ProductsAction } from "../../context/ProductsReducer";
import "./Shop.scss";
import Navbar from "../Navbar/Navbar";
import ShopItem from "./ShopItem/ShopItem";
import SkeletonItem from "./ShopItem/SkeletonItem";
import Footer from "../Footer/Footer";
import { useParams } from "react-router";
export default function Shop() {
  const param = useParams();
  const products = useProducts();
  return (
    <>
      <Navbar />
      <h1 className="shopTitle">All products</h1>
      <div className="productsContainer">
        {products.length ? (
          products
            .filter((product: ProductsAction) => {
              if (param.category) {
                return product.category === param.category;
              }
              return product;
            })
            .map((product: ProductsAction) => {
              return <ShopItem product={product} key={product.id} />;
            })
        ) : (
          <>
            <SkeletonItem />
            <SkeletonItem />
            <SkeletonItem />
            <SkeletonItem />
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
