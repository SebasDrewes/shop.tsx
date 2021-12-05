import "./MainImage.scss";
import { useNavigate } from "react-router-dom";
export default function MainImage() {
  const shopNow = "shopNow";
  const navigate = useNavigate();
  return (
    <div className="mainImage">
      <h1 className="imageText">Season Sale</h1>
      <h1
        className={`imageText ${shopNow}`}
        onClick={() => navigate("/shop.tsx/products")}
      >
        <u>Shop Now</u>
      </h1>
    </div>
  );
}
