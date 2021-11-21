import useProducts from "./useProducts";
import "./Shop.scss";
import Button from "@mui/material/Button";
import Navbar from "./Navbar";
import { useContext } from "react";
import { ProductsDispatchContext } from "./context/ProductsContext";
import { ProductsAction } from "./context/ProductsReducer";
export default function Shop() {
  const dispatch = useContext(ProductsDispatchContext);
  const products = useProducts();
  function addToCart(product: ProductsAction) {
    dispatch({
      type: "added",
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
    });
  }
  return (
    <>
      <Navbar />
      <h1>Welcome to Shop!</h1>
      <div className="productsContainer">
        {products.map((product: ProductsAction) => {
          return (
            <div key={product.id} className="productBox">
              <h3>{product.title}</h3>
              <hr />
              <img
                className="productImage"
                src={product.image}
                alt={product.title}
              />
              <hr />
              <p>{product.price}</p>
              <hr />
              <Button onClick={() => addToCart(product)}>Add to Cart</Button>
            </div>
          );
        })}
      </div>
    </>
  );
}
