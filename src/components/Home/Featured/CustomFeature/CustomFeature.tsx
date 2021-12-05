import { useState } from "react";
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
  const [position, setPosition] = useState({
    text: "0%",
    shopNow: "75%",
  });
  const [underline, setUnderline] = useState("none");
  function handleMouseEnter() {
    setPosition({ ...position, text: "30%", shopNow: "50%" });
    setUnderline("underline");
  }
  function handleMouseLeave() {
    setPosition({ ...position, text: "10%", shopNow: "75%" });
    setUnderline("none");
  }
  return (
    <div
      className="featured"
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      <h1 className="dealText" style={{ top: position.text }}>
        {text}
      </h1>
      <h1
        className="shopNowFeature"
        style={{ top: position.shopNow, textDecoration: underline }}
      >
        Shop now
      </h1>
      <img
        src={image}
        alt={text}
        className="featuredImage"
        onClick={() => navigate(`/shop.tsx/products/${category}`)}
      />
    </div>
  );
}
