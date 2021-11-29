import { createContext } from "react";
import { ProductsState } from "./ProductsReducer";

export const ProductsContext = createContext([] as ProductsState);
export const ProductsDispatchContext = createContext<Function>(Function);
