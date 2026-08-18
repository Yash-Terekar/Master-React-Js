import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <p>-----------------------------------------------------</p>
      <h1>Counter</h1>
      <p>-----------------------------------------------------</p>
      <h1>{count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <p>-----------------------------------------------------</p>
    </div>
  );
};
export default Counter;
