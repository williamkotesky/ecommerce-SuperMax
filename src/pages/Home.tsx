import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>Hellow world!!</div>
      <Link to="/about">Acesse sobre</Link>
    </>
  );
}

export default Home;
