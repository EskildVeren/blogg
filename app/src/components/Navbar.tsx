import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to={"/"}>Hjem</Link>
      <Link to={"/blog"}>Innlegg</Link>
      <Link to={"/about"}>Om meg</Link>
      <Link to={"/writeBlog"}>Skriv et inlegg</Link>
    </nav>
  );
}

export default Navbar;
