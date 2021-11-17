import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function Cart() {
  return (
    <Box sx={{ width: 250 }} role="presentation">
      <h1>Your shopping Cart</h1>
      {true ? "Your cart is empty" : null}
      {true ? <Button>Browse products</Button> : <Button>Checkout</Button>}
    </Box>
  );
}
