import { useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div>
      <p>==============================================</p>
      <h1>Counter</h1>
      <h1>{count}</h1>
      <button onClick={decrement}>-</button>{" "}
      <button onClick={reset}>Reset</button>{" "}
      <button onClick={increment}>+</button>
      <p>==============================================</p>
    </div>
  );
};
export default CounterApp;
