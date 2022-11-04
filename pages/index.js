import Link from "next/link";
import Menu from "../components/menu";

function Home() {
  console.log("https://json-server-danson.vercel.app/products")
  return (
    
    <>
      <Menu/>
      <h1>Next JS pre-rendering</h1>
    </>
  );
}

export default Home;
