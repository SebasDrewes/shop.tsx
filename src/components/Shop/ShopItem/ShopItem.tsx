import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import { ProductType } from "../../../context/ProductsReducer";
import { useContext } from "react";
import { ProductsDispatchContext } from "../../../context/ProductsContext";
import "./ShopItem.scss";
import Alert from "@mui/material/Alert";
import { AlertTitle } from "@mui/material";
type ShopItemsPropTypes = {
  product: ProductType;
};

export default function ShopItem({ product }: ShopItemsPropTypes) {
  /* SNACKBAR STATE */
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  /* SNACKBAR STATE  */

  const dispatch = useContext(ProductsDispatchContext);
  function addToCart(product: ProductType) {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 5000);
    dispatch({
      type: "added",
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
    });
  }
  return (
    <div className="shopProduct">
      <div className="productImageContainer">
        <img
          src={product.image}
          className="shopProductImage"
          alt={product.title}
          draggable={false}
        />
      </div>
      <h2 className="productTitle">{product.title}</h2>
      <div className="productInfo">
        <h1 className="productPrice">${product.price.toFixed(2)}</h1>
        <button className="shopButton" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
      <Snackbar open={open} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{
            color: "white",
            backgroundColor: "black",
            border: "1px solid #f4f5f3",
            fontSize: "1.2rem",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
          }}
        >
          <AlertTitle>{product.title}</AlertTitle>
          Added to Cart
        </Alert>
      </Snackbar>
    </div>
  );
}
