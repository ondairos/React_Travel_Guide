import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import MainCard from "./components/MainCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <div className="main__container">
        <MainCard />
      </div>
    </div>
  );
}

export default App;
