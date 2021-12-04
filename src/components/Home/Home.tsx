import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import MainImage from "./MainImage/MainImage";
import Featured from "./Featured/Featured";
export default function Home() {
  return (
    <>
      <Navbar />
      <MainImage />
      <Featured />
      <Footer />
    </>
  );
}
