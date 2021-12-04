import { useState, useEffect } from "react";
import useProducts from "../../hooks/useProducts";
import { ProductsAction } from "../../context/ProductsReducer";
import "./Shop.scss";
import Navbar from "../Navbar/Navbar";
import ShopItem from "./ShopItem/ShopItem";
import SkeletonItem from "./ShopItem/SkeletonItem";
import Footer from "../Footer/Footer";
import { useParams } from "react-router";
export default function Shop() {
  const [category, setCategory] = useState("");
  const param = useParams();
  const products = useProducts();
  useEffect(() => {
    if (param.category === "men") {
      setCategory("men's clothing");
    } else if (param.category === "women") {
      setCategory("women's clothing");
    } else {
      setCategory("");
    }
  }, [param]);

  return (
    <>
      <Navbar />
      <h1 className="shopTitle">All products</h1>
      <div className="productsContainer">
        {products.length ? (
          products
            .filter((product: ProductsAction) => {
              if (category) {
                return product.category === category;
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
