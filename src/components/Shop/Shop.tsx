import useProducts from "../useProducts";
import { ProductsAction } from "../context/ProductsReducer";
import "./Shop.scss";
import Navbar from "../Navbar/Navbar";
import CircularProgress from "@mui/material/CircularProgress";
import ShopItem from "./ShopItem/ShopItem";
import SkeletonItem from "./ShopItem/SkeletonItem";
export default function Shop() {
  const products = useProducts();

  return (
    <>
      <Navbar />
      <h1 className="shopTitle">All products</h1>
      <div className="productsContainer">
        {products.length ? (
          products.map((product: ProductsAction) => {
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
    </>
  );
}
