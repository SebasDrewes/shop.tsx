import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import AboutUs from "./components/AboutUs/AboutUs";
import { useReducer } from "react";
import { ProductsReducer, initialProducts } from "./context/ProductsReducer";
import {
  ProductsContext,
  ProductsDispatchContext,
} from "./context/ProductsContext";
import "./App.scss";

export default function App() {
  const [products, dispatch] = useReducer(ProductsReducer, initialProducts);
  return (
    <BrowserRouter>
      <ProductsContext.Provider value={products}>
        <ProductsDispatchContext.Provider value={dispatch}>
          <Routes>
            <Route path="/shop.tsx" element={<Home />} />
            <Route path="/shop.tsx/products/:category" element={<Shop />} />
            <Route path="/shop.tsx/products" element={<Shop />} />
            <Route path="/shop.tsx/about" element={<AboutUs />} />
          </Routes>
        </ProductsDispatchContext.Provider>
      </ProductsContext.Provider>
    </BrowserRouter>
  );
}
