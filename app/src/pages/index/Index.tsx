import "./style.css";
import SpinningCat from "./components/SpinningCat";
import Navbar from "../../components/Navbar";

function IndexPage() {
  return (
    <>
      <Navbar />
      <ul>
        <li>Lage oiia Stellan med bie-stæsj som spinner</li>
        <li>La katten fly oppover når den spinner</li>
      </ul>
      <SpinningCat />
    </>
  );
}

export default IndexPage;
