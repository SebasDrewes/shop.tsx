import "./CustomFeature.scss";
import { useNavigate } from "react-router-dom";

type FeaturedTypes = {
  image: string;
  text: string;
  category?: string;
};
export default function CustomFeature({
  image,
  text,
  category,
}: FeaturedTypes) {
  const navigate = useNavigate();
  return (
    <div className="featured">
      <h1 className="dealText">{text}</h1>
      <img
        src={image}
        alt={text}
        className="featuredImage"
        onClick={() => navigate(`/shop/${category}`)}
      />
    </div>
  );
}
