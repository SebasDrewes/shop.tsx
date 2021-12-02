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
  function deleteFromCart(product: ProductsAction) {
    dispatch({
      type: "deleted",
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
        <p className="productPrice">${product.price.toFixed(2)}</p>
      </div>
      <div className="quantity">
        <AddIcon
          onClick={() => addToCart(product)}
          sx={{ marginRight: "10px", cursor: "pointer" }}
        />
        {product.amount}
        <RemoveIcon
          onClick={() => deleteFromCart(product)}
          sx={{ marginLeft: "10px", cursor: "pointer" }}
        />
      </div>
    </div>
  );
}
