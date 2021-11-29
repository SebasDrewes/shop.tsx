import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import "./Cart.scss";
export default function Cart({ close }: any) {
  const products = useContext(ProductsContext);
  return (
    <div className="shoppingCart">
      <h1 className="shoppingCartTitle">Your shopping Cart</h1>
      {products && products.length > 0
        ? products.map((product) => {
            return (
              <div key={product.id}>
                <img
                  className="cartItemImage"
                  alt={product.title}
                  src={product.image}
                />
                <p>{product.price}</p>
              </div>
            );
          })
        : "Your cart is empty"}
      {products && products.length > 0 ? (
        <button>Checkout</button>
      ) : (
        <button>Browse products</button>
      )}
      <button onClick={() => close(false)}>Close</button>
    </div>
  );
}
