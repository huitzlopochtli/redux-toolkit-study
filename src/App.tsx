import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Link to={"/"}>Home</Link> <br />
      <Link to={"/Contact"}>Contact</Link> <br />
      <Link to={"/Counter"}>Counter</Link> <br />
      <Link to={"/Posts"}>Posts</Link> <br />
    </>
  );
}

export default App;
