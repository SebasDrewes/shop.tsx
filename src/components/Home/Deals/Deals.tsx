import CustomDeal from "./CustomDeal/CustomDeal";
import menClothes from "./menClothes.jpeg";
import womenClothes from "./womenClothes.jpg";
import accessories from "./accessories.jpg";
export default function Deals() {
  return (
    <div>
      <h1>Deals of the Week</h1>
      <div>
        <CustomDeal
          image={menClothes}
          text={"Men's Clothing"}
          discount={"30"}
        />
        <CustomDeal
          image={womenClothes}
          text={"Men's Clothing"}
          discount={"35"}
        />
        <CustomDeal image={accessories} text={"Accesories"} discount={"40"} />
      </div>
    </div>
  );
}
