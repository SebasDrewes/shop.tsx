export const initialProducts = [];
export type ProductsState = {
  id: number;
  title: string;
  image: string;
  price: number;
  amount: number;
}[];

export type ProductType = {
  type?: string;
  category?: string;
  id: number;
  title: string;
  image: string;
  price: number;
  amount: number;
};
export function ProductsReducer(products: ProductsState, action: ProductType) {
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
      return products
        .map((product) => {
          if (product.id === action.id) {
            return { ...product, amount: product.amount - 1 };
          }
          return product;
        })
        .filter((product) => product.amount > 0);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
