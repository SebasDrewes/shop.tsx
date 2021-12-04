import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
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
  const navigate = useNavigate();
  const param = useParams();
  const products = useProducts();
  useEffect(() => {
    switch (param.category) {
      case "men":
        setCategory("men's clothing");
        break;
      case "women":
        setCategory("women's clothing");
        break;
      case "accesories":
        setCategory("accesories");
        break;
      default:
        setCategory("");
    }
  }, [param]);

  function handleCategoryClick(category: string) {
    navigate(`${category}`);
  }

  return (
    <>
      <Navbar />
      <div className="category">
        <h1
          className={category === "" ? "shopCategoryClicked" : "shopCategory"}
          onClick={() => handleCategoryClick("/shop")}
        >
          All products
        </h1>
        <h1
          className={
            category === "men's clothing"
              ? "shopCategoryClicked"
              : "shopCategory"
          }
          onClick={() => handleCategoryClick("/shop/men")}
        >
          Men's Clothing
        </h1>
        <h1
          className={
            category === "women's clothing"
              ? "shopCategoryClicked"
              : "shopCategory"
          }
          onClick={() => handleCategoryClick("/shop/women")}
        >
          Women's Clothing
        </h1>
      </div>
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
