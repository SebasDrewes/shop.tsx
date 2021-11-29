import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Home.scss";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="home">
        <h1>Welcome to Home!</h1>
      </div>
      <Footer />
    </>
  );
}
