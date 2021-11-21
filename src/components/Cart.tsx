import Box from "@mui/material/Box";
import { useContext } from "react";
import Button from "@mui/material/Button";
import { ProductsContext } from "./context/ProductsContext";
import "./Cart.scss";
export default function Cart() {
  const products = useContext(ProductsContext);
  return (
    <Box sx={{ width: 250 }} role="presentation">
      <h1>Your shopping Cart</h1>
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
        <Button>Checkout</Button>
      ) : (
        <Button>Browse products</Button>
      )}
    </Box>
  );
}
