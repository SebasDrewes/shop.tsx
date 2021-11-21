import { useParams } from "react-router-dom";
import useProducts from "./useProducts";

export default function ProductDetail() {
  const { id } = useParams();
  const product: any = useProducts(id);
  console.log(product);
  return (
    <div className="productDetail">
      <img src={product.image} alt={product.title} className="productImage" />
      <div>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <p>Buy</p>
      </div>
    </div>
  );
}
