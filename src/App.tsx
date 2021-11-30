import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import { useReducer } from "react";
import { ProductsReducer, initialProducts } from "./context/ProductsReducer";
import {
  ProductsContext,
  ProductsDispatchContext,
} from "./context/ProductsContext";

export default function App() {
  const [products, dispatch] = useReducer(ProductsReducer, initialProducts);
  return (
    <BrowserRouter>
      <ProductsContext.Provider value={products}>
        <ProductsDispatchContext.Provider value={dispatch}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </ProductsDispatchContext.Provider>
      </ProductsContext.Provider>
    </BrowserRouter>
  );
}
