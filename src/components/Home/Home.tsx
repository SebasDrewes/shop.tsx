import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Home.scss";
export default function Home() {
  return (
    <>
      <Navbar />
      <h1 className="home">Welcome to Home!</h1>
      <Footer />
    </>
  );
}
