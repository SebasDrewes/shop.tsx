import useProducts from "./useProducts";
import "./Shop.scss";
import Button from "@mui/material/Button";
import Navbar from "./Navbar";
type ProductsTypes = {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
};
export default function Shop() {
  const products = useProducts();
  return (
    <>
      <Navbar />
      <h1>Welcome to Shop!</h1>
      <div className="productsContainer">
        {products.map((product: ProductsTypes) => {
          return (
            <div key={product.id} className="productBox">
              <h3>{product.title}</h3>
              <hr />
              <img
                className="productImage"
                src={product.image}
                alt={product.title}
              />
              <hr />
              <p>{product.price}</p>
              <hr />
              <Button>Add to Cart</Button>
            </div>
          );
        })}
      </div>
    </>
  );
}
