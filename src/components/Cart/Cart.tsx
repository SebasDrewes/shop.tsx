import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem/CartItem";
import CloseIcon from "@mui/icons-material/Close";
import useWindowDimensions from "./../../hooks/useWindowDimensions";
import "./Cart.scss";
export default function Cart({ close }: any) {
  const { width } = useWindowDimensions();
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
  function handleHomeClick() {
    navigate("/home");
    close(false);
  }
  return (
    <div className="shoppingCart">
      {width < 750 ? (
        <div className="titlesContainer">
          <h1 onClick={() => handleHomeClick()} className="cartTitle">
            Home
          </h1>
          <h1 onClick={() => navigate("/shop")} className="cartTitle">
            Products
          </h1>
          <h1 onClick={() => navigate("/about")} className="cartTitle">
            About Us
          </h1>
        </div>
      ) : null}
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
