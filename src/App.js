import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import "./App.scss";
import { useReducer } from "react";
import {
  ProductsReducer,
  initialProducts,
} from "./components/context/ProductsReducer";
import {
  ProductsContext,
  ProductsDispatchContext,
} from "./components/context/ProductsContext";

function App() {
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

export default App;
