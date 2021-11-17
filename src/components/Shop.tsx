import useProducts from "./useProducts";
type ProductsTypes = {
  id: number;
  title: string;
  image: string;
  description: string;
};
export default function Shop() {
  const products = useProducts();
  return (
    <>
      <h1>Welcome to Shop!</h1>
      {products.map((product: ProductsTypes) => {
        return (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        );
      })}
    </>
  );
}
