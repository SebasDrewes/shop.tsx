export const initialProducts = [];
export function ProductsReducer(products, action) {
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
