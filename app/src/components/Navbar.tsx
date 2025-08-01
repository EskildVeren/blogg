import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to={"/"}>Hjem</Link>
      <hr />
      <Link to={"/blog"}>Innlegg</Link>
      <hr />
      <Link to={"/about"}>Om meg</Link>
      <hr />
      <Link to={"/writeBlog"}>Skriv et inlegg</Link>
    </nav>
  );
}

export default Navbar;
