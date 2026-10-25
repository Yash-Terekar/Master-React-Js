import { useEffect, useState } from "react";

const CounterTitle = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count : ${count}`;
  }, [count]);
  return (
    <div>
      <h1>Counter : {count}</h1>

      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
    </div>
  );
};
export default CounterTitle;
