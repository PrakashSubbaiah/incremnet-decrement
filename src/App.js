import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [incDecValue, setIncDecValue] = useState(0);

  handleInput = (e) => {
    setIncDecValue(Number(e.target.value));
  };
  handleIncrement = () => {
    setCount(count + incDecValue);
  };

  handleDecrement = () => {
    setCount(count - incDecValue);
  };
  handleReset = () => {
    setCount(0);
    setIncDecValue(0);
  };
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => handleDecrement()}>-</button>
      <button onClick={() => handleIncrement()}>+</button>
      <div>
        <h4>Increment/Decrement By </h4>
        <input onChange={(e) => handleInput(e)} value={incDecValue} />
      </div>
      <button onClick={() => handleReset()}>Reset</button>
    </div>
  );
}
