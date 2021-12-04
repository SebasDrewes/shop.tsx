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
    setCategory(category);
  }

  return (
    <>
      <Navbar />
      <div className="category">
        <h1 className="shopTitle" onClick={() => handleCategoryClick("")}>
          All products
        </h1>
        <h1
          className="shopTitle"
          onClick={() => handleCategoryClick("men's clothing")}
        >
          Men's Clothing
        </h1>
        <h1
          className="shopTitle"
          onClick={() => handleCategoryClick("women's clothing")}
        >
          Women's Clothing
        </h1>
        <h1
          className="shopTitle"
          onClick={() => handleCategoryClick("accesories")}
        >
          Accesories
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
