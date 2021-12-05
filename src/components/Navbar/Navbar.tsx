import { useState, useContext } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import "./Navbar.scss";
import { ProductsContext } from "../../context/ProductsContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import Cart from "../Cart/Cart";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import MenuIcon from "@mui/icons-material/Menu";
export default function Navbar() {
  const [state, setState] = useState(false);
  const { width } = useWindowDimensions();
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
      <h1 className="logo" onClick={() => navigate("/shop.tsx")}>
        SHOP.TSX
      </h1>
      {width > 750 ? (
        <>
          <h1 onClick={() => navigate("/shop.tsx")} className="navItem">
            Home
          </h1>
          <h1
            onClick={() => navigate("/shop.tsx/products")}
            className="navItem"
          >
            Products
          </h1>
          <h1 onClick={() => navigate("/shop.tsx/about")} className="navItem">
            About Us
          </h1>{" "}
        </>
      ) : null}

      <Button
        sx={{ fontSize: 40, color: "white", padding: 0 }}
        onClick={toggleDrawer(true)}
      >
        {products?.length > 0 && width > 750 ? productsAmount : null}
        {width > 750 ? (
          <ShoppingCartIcon
            onClick={toggleDrawer(true)}
            sx={{ fontSize: 50, color: "white", padding: 0 }}
          />
        ) : (
          <MenuIcon
            onClick={toggleDrawer(true)}
            sx={{ fontSize: 50, color: "white", padding: 0 }}
          />
        )}
      </Button>
      <Drawer anchor={"right"} open={state} onClose={toggleDrawer(false)}>
        <Cart close={setState} />
      </Drawer>
    </nav>
  );
}
