import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem/CartItem";
import CloseIcon from "@mui/icons-material/Close";
import "./Cart.scss";
export default function Cart({ close }: any) {
  const navigate = useNavigate();
  const products = useContext(ProductsContext);
  const sumReducer = (
    previousValue: number,
    currentValue: {
      price: number;
      amount: number;
    }
  ) => previousValue + currentValue.price * currentValue.amount;
  const productSum = products.reduce(sumReducer, 0);
  const amountReducer = (
    previousValue: number,
    currentValue: {
      amount: number;
    }
  ) => previousValue + currentValue.amount;
  const productsAmount = products.reduce(amountReducer, 0);
  function handleBrowseClick() {
    navigate("/shop");
    close(false);
  }
  return (
    <div className="shoppingCart">
      <div className="cartTitleContainer">
        <h1 className="shoppingCartTitle">Cart ({productsAmount} items)</h1>
        <CloseIcon
          sx={{ fontSize: "3rem", cursor: "pointer" }}
          onClick={() => close(false)}
        />
      </div>
      <div className="cartProductsContainer">
        {products && products.length > 0 ? (
          products.map((product) => {
            return <CartItem product={product} key={product.id} />;
          })
        ) : (
          <>
            <p className="emptyCart">Your cart is empty</p>
            <button
              className="checkoutButton"
              onClick={() => handleBrowseClick()}
            >
              Browse Products
            </button>
          </>
        )}
      </div>
      {products && products.length > 0 ? (
        <div className="totalContainer">
          <h1 className="total">Total ${productSum.toFixed(2)}</h1>
          <button className="checkoutButton">Checkout</button>
        </div>
      ) : null}
    </div>
  );
}
