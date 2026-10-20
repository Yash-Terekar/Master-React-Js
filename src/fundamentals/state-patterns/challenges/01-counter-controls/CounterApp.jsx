import { useState } from "react";
import Counter from "./Counter";

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const handleReset = () => setCount(0);
  const handleIncrease = () => setCount((prev) => prev + 1);
  const handleDecrease = () => setCount((prev) => prev - 1);
  return (
    <div>
      <Counter
        count={count}
        reset={handleReset}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
    </div>
  );
};
export default CounterApp;
