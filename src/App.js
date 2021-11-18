import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import "./App.scss";
import { useReducer } from "react";
import {
  ProductsReducer,
  initialProducts,
} from "./components/context/ProductsReducer";

function App() {
  const [products, dispatch] = useReducer(ProductsReducer, initialProducts);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
