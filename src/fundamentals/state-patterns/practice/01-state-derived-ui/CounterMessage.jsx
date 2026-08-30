import { useState } from "react";

const CounterMessage = () => {
  const [count, setCount] = useState(0);
  const decrease = () => {
    setCount(count - 1);
  };
  const increase = () => {
    setCount(count + 1);
  };
  let status = "Starting";
  if (count < 0) {
    status = "Negative";
  } else if (count > 0) {
    status = "Positive";
  }
  return (
    <div>
      <h1> Count {count}</h1>
      <button onClick={decrease}>Decrease</button>
      <button onClick={increase}>Increase</button>
      <h1>Status {status}</h1>
    </div>
  );
};
export default CounterMessage;
