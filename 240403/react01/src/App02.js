import "./App.css";
import { useState, useRef } from "react";
import Viewer01 from "./Components/Viewer01";
import Controller from "./Components/Controller";

function App() {
  const [count, setCount] = useState(0);
  const handleSetCount = (num) => {
    setCount(count + num);
  };
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer01 count={count} />
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App;
