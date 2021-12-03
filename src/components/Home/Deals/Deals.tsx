import CustomDeal from "./CustomDeal/CustomDeal";
import menClothes from "./menClothes.jpeg";
import womenClothes from "./womenClothes.jpg";
import accessories from "./accessories.jpg";
import "./Deals.scss";
export default function Deals() {
  return (
    <div>
      <h1 className="dealsTitle">Deals of the Week</h1>
      <div className="deals">
        <CustomDeal
          image={menClothes}
          text={"Men's Clothing"}
          discount={"30"}
          category="men's clothing"
        />
        <CustomDeal
          image={womenClothes}
          text={"Women's Clothing"}
          discount={"35"}
          category="women's clothing"
        />
        <CustomDeal image={accessories} text={"Accesories"} discount={"40"} />
      </div>
    </div>
  );
}
