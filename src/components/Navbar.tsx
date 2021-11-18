import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import "./Navbar.scss";
import Link from "@mui/material/Link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";

export default function Navbar() {
  const [state, setState] = useState(false);
  const navigate = useNavigate();

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
      <Button onClick={() => navigate("/home")}>Inicio</Button>
      <Button onClick={() => navigate("/shop")}>Shop</Button>
      <Button onClick={toggleDrawer(true)}>
        <ShoppingCartIcon sx={{ fontSize: 50 }} />
      </Button>
      <Drawer anchor={"right"} open={state} onClose={toggleDrawer(false)}>
        <Cart />
      </Drawer>
    </nav>
  );
}
