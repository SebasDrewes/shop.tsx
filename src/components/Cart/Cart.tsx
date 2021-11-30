import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import CartItem from "./CartItem/CartItem";
import CloseIcon from "@mui/icons-material/Close";
import "./Cart.scss";
export default function Cart({ close }: any) {
  const products = useContext(ProductsContext);
  return (
    <div className="shoppingCart">
      <div className="cartTitleContainer">
        <h1 className="shoppingCartTitle">Cart ({products.length} items)</h1>
        <CloseIcon
          sx={{ fontSize: "3rem", cursor: "pointer" }}
          onClick={() => close(false)}
        />
      </div>
      <div className="cartProductsContainer">
        {products && products.length > 0
          ? products.map((product) => {
              return <CartItem product={product} key={product.id} />;
            })
          : "Your cart is empty"}
      </div>
      {products && products.length > 0 ? (
        <div className="totalContainer">
          <h1 className="total">Total $150</h1>
          <button className="checkoutButton">Checkout</button>
        </div>
      ) : null}
    </div>
  );
}
