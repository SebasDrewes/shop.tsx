import "./CustomDeal.scss";
import { useNavigate } from "react-router-dom";

type CustomDealTypes = {
  image: string;
  text: string;
  discount: string;
};
export default function CustomDeal({ image, text, discount }: CustomDealTypes) {
  const navigate = useNavigate();
  return (
    <div className="customDeal">
      <img src={image} alt={text} className="customDealImage" />
      <h1 className="dealText">{text}</h1>
      <h1>{discount}% Off</h1>
      <button onClick={() => navigate("/shop")} className="shopButton">
        Shop Now
      </button>
    </div>
  );
}
