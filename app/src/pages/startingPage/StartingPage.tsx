import "./style.css";

function StartingPage(props: { setSiteState: (newState: string) => void }) {
  return (
    <button onClick={() => props.setSiteState("spin")} className="play-button">
      Trykk på meg!
    </button>
  );
}

export default StartingPage;
