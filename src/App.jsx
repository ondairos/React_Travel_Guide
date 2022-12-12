import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import MainCard from "./components/MainCard";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main__wrapper">
      <Navbar />
      <div className="main__container">
        <MainCard />
        <MainCard />
      </div>
    </div>
  );
}

export default App;
