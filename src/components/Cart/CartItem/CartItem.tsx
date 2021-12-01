import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import { ProductsAction } from "../../../context/ProductsReducer";
import { useContext } from "react";
import { ProductsDispatchContext } from "../../../context/ProductsContext";
import "./CartItem.scss";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
type ShopItemsPropTypes = {
  product: ProductsAction;
};

export default function CartItem({ product }: ShopItemsPropTypes) {
  const dispatch = useContext(ProductsDispatchContext);
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
    <div className="cartContainer">
      <div className="cartProduct">
        <div className="cartProductImageContainer">
          <img
            src={product.image}
            className="shopProductImage"
            alt={product.title}
            draggable={false}
          />
        </div>
        <h3 className="cartProductTitle">{product.title}</h3>
        <p className="productPrice">${product.price}</p>
      </div>
      <div className="quantity">
        <AddIcon sx={{ marginRight: "10px", cursor: "pointer" }} />
        {product.amount}
        <RemoveIcon sx={{ marginLeft: "10px", cursor: "pointer" }} />
      </div>
    </div>
  );
}
