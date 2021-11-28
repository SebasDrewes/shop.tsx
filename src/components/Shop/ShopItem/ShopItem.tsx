import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import { ProductsAction } from "../../context/ProductsReducer";
import { useContext } from "react";
import { ProductsDispatchContext } from "../../context/ProductsContext";
import "./ShopItem.scss";
type ShopItemsPropTypes = {
  product: ProductsAction;
};

export default function ShopItem({ product }: ShopItemsPropTypes) {
  /* SNACKBAR STATE */
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  /* SNACKBAR STATE  */

  const dispatch = useContext(ProductsDispatchContext);
  function addToCart(product: ProductsAction) {
    setOpen(true);
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
        />
      </div>
      <h3 className="productTitle">{product.title}</h3>
      <div className="productInfo">
        <p className="productPrice">${product.price}</p>
        <button
          className="shopProductButton"
          onClick={() => addToCart(product)}
        >
          Add to cart
        </button>
      </div>
      <Snackbar
        open={open}
        onClose={handleClose}
        message={`Added ${product.title} to the Shopping Cart`}
      />
    </div>
  );
}
