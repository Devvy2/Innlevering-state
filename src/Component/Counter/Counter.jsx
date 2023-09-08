import { useState } from "react";
import "./counter.css";

export function Counter() {
  const [counter, setCounter] = useState(0);

  const Increment = () => {
    setCounter(counter + 1);
  };

  const Decrement = () => {
    setCounter(counter - 1);
  };

  const Reset = () => {
    setCounter(0);
  };

  return (
    <div>
      <h1>States</h1>
      <p>Counter: {counter}</p>
      <div className="btn-counter">
        <button className="Increment" onClick={Increment}>
          Increment
        </button>
        <button className="Reset" onClick={Reset}>
          Reset
        </button>
        <button className="Decrement" onClick={Decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}
