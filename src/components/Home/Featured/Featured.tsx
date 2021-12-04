import CustomFeature from "./CustomFeature/CustomFeature";
import menClothes from "./menClothes.jpeg";
import womenClothes from "./womenClothes.jpg";
import "./Featured.scss";
export default function Featured() {
  return (
    <div>
      <h1 className="dealsTitle">Featured Collections</h1>
      <div className="deals">
        <CustomFeature
          image={menClothes}
          text={"Men's Clothing"}
          category="men"
        />
        <CustomFeature
          image={womenClothes}
          text={"Women's Clothing"}
          category="women"
        />
      </div>
    </div>
  );
}
