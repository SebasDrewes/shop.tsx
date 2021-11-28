import { ProductsAction } from "../../context/ProductsReducer";
import { useContext } from "react";
import { ProductsDispatchContext } from "../../context/ProductsContext";
import "./ShopItem.scss";
type ShopItemsPropTypes = {
  product: ProductsAction;
};
export default function ShopItem({ product }: ShopItemsPropTypes) {
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
  console.log(product);
  return (
    <div key={product.id} className="shopProduct">
      <div className="shopProductImageContainer">
        <img
          src={product.image}
          className="shopProductImage"
          alt={product.title}
        />
      </div>
      <div className="productInfo">
        <h3 className="productTitle">{product.title}</h3>
        <p>${product.price}</p>
        <button
          className="shopProductButton"
          onClick={() => addToCart(product)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
