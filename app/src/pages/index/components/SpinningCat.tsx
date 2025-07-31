import useSound from "use-sound";
import oiia from "../../../sounds/oiia-oiia.mp3";
import spinningCat from "../../../assets/spinning-cat.gif";
import standingCat from "../../../assets/standing-cat.gif";
import { useState } from "react";

function SpinningCat() {
  const [catHovered, setCatHovered] = useState(false);
  const [play, { stop }] = useSound(oiia);

  const spinCat = () => {
    play();
    setCatHovered(true);
  };

  const stopCat = () => {
    stop();
    //setCatHovered(false);
  };

  return (
    <div
      onMouseEnter={spinCat}
      onMouseLeave={stopCat}
      className="cat-container"
    >
      {catHovered ? (
        <>
          <img className="levitating-cat" src={spinningCat}></img>
          <img className="levitating-cat" src={spinningCat}></img>
          <img className="levitating-cat" src={spinningCat}></img>
          <img className="levitating-cat" src={spinningCat}></img>
        </>
      ) : (
        <img src={standingCat}></img>
      )}
    </div>
  );
}

export default SpinningCat;
