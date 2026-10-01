import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const decreament = () => {
    setCount(count - 1);
  };
  const increament = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>-----------------------------------------</p>
      <h2>Counter</h2>
      <p>-----------------------------------------</p>
      <h1>{count}</h1>
      <button onClick={decreament}>-</button>{" "}
      <button onClick={increament}>+</button>
      <p>-----------------------------------------</p>
    </div>
  );
};
export default Counter;
