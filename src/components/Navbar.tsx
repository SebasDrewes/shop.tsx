import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import "./Navbar.scss";
import Link from "@mui/material/Link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import Cart from "./Cart";

export default function Navbar() {
  const [state, setState] = useState(false);

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
      <Link href="/" underline="none">
        Inicio
      </Link>
      <Link href="/shop" underline="none">
        Shop
      </Link>
      <Link href="/search">
        <SearchIcon sx={{ fontSize: 90 }} />
      </Link>

      <Button onClick={toggleDrawer(true)}>
        <ShoppingCartIcon sx={{ fontSize: 90 }} />
      </Button>
      <Drawer anchor={"right"} open={state} onClose={toggleDrawer(false)}>
        <Cart />
      </Drawer>
    </nav>
  );
}
