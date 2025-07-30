import "./style.css";
import SpinningCat from "./components/SpinningCat";

function ProfilePage() {
  return (
    <div>
      <ul>
        <li>Lage oiia Stellan med bie-stæsj som spinner</li>
        <li>La katten fly oppover når den spinner</li>
      </ul>
      <SpinningCat />
    </div>
  );
}

export default ProfilePage;
