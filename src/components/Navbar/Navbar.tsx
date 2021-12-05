import { useState, useContext } from "react";
import useWindowDimensions from "./../../hooks/useWindowDimensions";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import "./Navbar.scss";
import { ProductsContext } from "../../context/ProductsContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import Cart from "../Cart/Cart";

export default function Navbar() {
  const [state, setState] = useState(false);
  const navigate = useNavigate();
  const products = useContext(ProductsContext);
  const amountReducer = (
    previousValue: number,
    currentValue: {
      amount: number;
    }
  ) => previousValue + currentValue.amount;
  const productsAmount = products.reduce(amountReducer, 0);
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
      <h1 className="logo">SHOP.TSX</h1>
      <h1 onClick={() => navigate("/home")} className="navItem">
        Home
      </h1>
      <h1 onClick={() => navigate("/shop")} className="navItem">
        Products
      </h1>
      <h1 onClick={() => navigate("/about")} className="navItem">
        About Us
      </h1>
      <Button
        sx={{ fontSize: 40, color: "white", padding: 0 }}
        onClick={toggleDrawer(true)}
      >
        {products?.length > 0 ? productsAmount : null}
        <ShoppingCartIcon
          onClick={toggleDrawer(true)}
          sx={{ fontSize: 50, color: "white", padding: 0 }}
        />
      </Button>
      <Drawer anchor={"right"} open={state} onClose={toggleDrawer(false)}>
        <Cart close={setState} />
      </Drawer>
    </nav>
  );
}
