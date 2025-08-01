import "./style.css";
import Navbar from "../../components/Navbar";

function WriteBlog() {
  return (
    <main className="col align-center">
      <Navbar />
      <span className="row space-between full-width">
        <label htmlFor="tittel" className="col">
          Tittel
          <input id="tittel" type="text" />
        </label>
        <label htmlFor="secret-code" className="col">
          Hemmelig kode
          <input id="secret-code" type="text" />
        </label>
      </span>
      <textarea />
    </main>
  );
}

export default WriteBlog;
