import { useState } from "react";

const CounterMessage = () => {
  const [count, setCount] = useState(0);
  const decreament = () => setCount(count - 1);
  const increament = () => setCount(count + 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>
        Status: {count === 0 ? "Starting" : count > 0 ? "Positive" : "Negative"}
      </h1>
      <button onClick={decreament}>-</button>
      <button onClick={increament}>+</button>
    </div>
  );
};
export default CounterMessage;
