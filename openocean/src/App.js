import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DropMenu from "./components/DropMenu";
import { useState } from "react";

function App() {
  const [burger, setBurger] = useState(true);

  const handleBurger = () => {
    setBurger(!burger);
  };

  return (
    <div className="App mt-[4.5rem]">
      <DropMenu handleBurger={handleBurger} burger={burger} />
      <Navbar handleBurger={handleBurger} burger={burger} />
      <Hero handleBurger={handleBurger} burger={burger} />
    </div>
  );
}

export default App;
