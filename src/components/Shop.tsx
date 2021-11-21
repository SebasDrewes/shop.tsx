import useProducts from "./useProducts";
import "./Shop.scss";
import Navbar from "./Navbar";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useContext } from "react";
import { ProductsDispatchContext } from "./context/ProductsContext";
import { ProductsAction } from "./context/ProductsReducer";
import { useNavigate } from "react-router-dom";

export default function Shop() {
  const navigate = useNavigate();
  const dispatch = useContext(ProductsDispatchContext);
  const products = useProducts();
  function addToCart(product: ProductsAction) {
    dispatch({
      type: "added",
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
    });
  }
  return (
    <>
      <Navbar />
      <h1>Welcome to Shop!</h1>
      <h2>Click to add to cart</h2>
      <div className="productsContainer">
        {products.length ? (
          products.map((product: ProductsAction) => {
            return (
              <Card sx={{ width: 345 }} key={product.id}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.image}
                    alt={product.title}
                    onClick={() => addToCart(product)}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    onClick={() => navigate(`/shop/${product.id}`)}
                    size="large"
                    color="primary"
                  >
                    Detalles
                  </Button>
                </CardActions>
              </Card>
            );
          })
        ) : (
          <CircularProgress size={200} />
        )}
      </div>
    </>
  );
}
