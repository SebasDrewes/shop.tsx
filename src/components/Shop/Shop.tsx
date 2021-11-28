import useProducts from "../useProducts";
import "./Shop.scss";
import Navbar from "../Navbar";
import CircularProgress from "@mui/material/CircularProgress";
import ShopItem from "./ShopItem/ShopItem";

export default function Shop() {
  const products = useProducts();

  return (
    <>
      <Navbar />
      <h1>Welcome to Shop!</h1>
      <div className="productsContainer">
        {products.length ? (
          products.map((product) => {
            return <ShopItem product={product} />;
          })
        ) : (
          <CircularProgress size={200} />
        )}
      </div>
    </>
  );
}
