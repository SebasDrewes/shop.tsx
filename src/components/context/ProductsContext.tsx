import { createContext } from "react";
import { ProductsState, ProductsAction } from "./ProductsReducer";
export const ProductsContext = createContext<ProductsState | null>(null);
export const ProductsDispatchContext =
  createContext<React.Dispatch<ProductsAction> | null>(null);
