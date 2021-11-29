import { useState, useContext } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import "./Navbar.scss";
import { ProductsContext } from "../context/ProductsContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import Cart from "../Cart";

export default function Navbar() {
  const [state, setState] = useState(false);
  const navigate = useNavigate();
  const products = useContext(ProductsContext);
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(open);
    };

  return (
    <nav className="navbar">
      <h1 onClick={() => navigate("/home")}>Home</h1>
      <h1 onClick={() => navigate("/shop")}>Products</h1>
      <Button
        sx={{ fontSize: 40, color: "white" }}
        onClick={toggleDrawer(true)}
      >
        {products?.length > 0 ? products?.length : null}
        <ShoppingCartIcon sx={{ fontSize: 50, color: "white" }} />
      </Button>
      <Drawer anchor={"right"} open={state} onClose={toggleDrawer(false)}>
        <Cart close={setState} />
      </Drawer>
    </nav>
  );
}
