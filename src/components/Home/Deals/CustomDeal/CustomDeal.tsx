type CustomDealTypes = {
  image: string;
  text: string;
  discount: string;
};
export default function CustomDeal({ image, text, discount }: CustomDealTypes) {
  return (
    <div className="customDeal">
      <img src={image} alt={text} className="customDealImage" />
      <h1>{text}</h1>
      <h1>{discount}</h1>
      <button>Shop now</button>
    </div>
  );
}
