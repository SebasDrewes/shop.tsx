import Box from "@mui/material/Box";
import { useContext } from "react";
import Button from "@mui/material/Button";
import { ProductsContext } from "./context/ProductsContext";
export default function Cart() {
  const products = useContext(ProductsContext);
  return (
    <Box sx={{ width: 250 }} role="presentation">
      <h1>Your shopping Cart</h1>
      {products && products.length > 0 ? products.length : "Your cart is empty"}
      {products && products.length > 0 ? (
        <Button>Checkout</Button>
      ) : (
        <Button>Browse products</Button>
      )}
    </Box>
  );
}
