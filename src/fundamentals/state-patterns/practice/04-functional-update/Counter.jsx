import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increaseby1 = () => setCount((prev) => prev + 1);
  const increaseby5 = () => setCount((prev) => prev + 5);
  const increaseby10 = () => setCount((prev) => prev + 10);
  const reset = () => setCount(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseby1}>+1</button>
      <br />
      <button onClick={increaseby5}>+5</button>
      <br />
      <button onClick={increaseby10}>+10</button>
      <br />
      <button onClick={reset}>Reset</button>
    </div>
  );
};
export default Counter;
