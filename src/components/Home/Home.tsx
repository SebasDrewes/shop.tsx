import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import MainImage from "./MainImage/MainImage";
import Deals from "./Deals/Deals";
import "./Home.scss";
export default function Home() {
  return (
    <>
      <Navbar />
      <MainImage />
      <Deals />
      <Footer />
    </>
  );
}
