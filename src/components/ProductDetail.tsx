import { useParams } from "react-router-dom";
import useProducts from "./useProducts";
export default function ProductDetail() {
  const { id } = useParams();
  const product = useProducts(id);
  console.log(product);
  return <h1>asd</h1>;
}
