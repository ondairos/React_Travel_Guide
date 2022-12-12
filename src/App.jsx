import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import MainCard from "./components/MainCard";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);

  const cards = data.map((element) => {
    return (
      <MainCard 
        key={element.id}
        {...element}
      />
    );
  });

  return (
    <div className="main__wrapper">
      <Navbar />
      <div className="main__container">
        <section>{cards}</section>
      </div>
    </div>
  );
}

export default App;
