export const initialProducts = [];
export type ProductsState = {
  id: number;
  title: string;
  image: string;
  price: number;
}[];

export type ProductsAction = {
  type: string;
  id: number;
  title: string;
  image: string;
  price: number;
};
export function ProductsReducer(
  products: ProductsState,
  action: ProductsAction
) {
  switch (action.type) {
    case "added": {
      return [
        ...products,
        {
          id: action.id,
          title: action.title,
          image: action.image,
          price: action.price,
        },
      ];
    }
    case "deleted": {
      return products.filter((product) => product.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
