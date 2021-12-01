export const initialProducts = [];
export type ProductsState = {
  id: number;
  title: string;
  image: string;
  price: number;
  amount: number;
}[];

export type ProductsAction = {
  type?: string;
  id: number;
  title: string;
  image: string;
  price: number;
  amount: number;
};
export function ProductsReducer(
  products: ProductsState,
  action: ProductsAction
) {
  switch (action.type) {
    case "added": {
      if (
        products.some((product) => {
          return product.id === action.id;
        })
      ) {
        return products.map((product) => {
          if (product.id === action.id) {
            return { ...product, amount: product.amount + 1 };
          }
          return product;
        });
      }
      return [
        ...products,
        {
          id: action.id,
          title: action.title,
          image: action.image,
          price: action.price,
          amount: 1,
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
