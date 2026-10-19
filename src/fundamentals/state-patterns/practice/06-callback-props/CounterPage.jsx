import { useState } from "react";
import Counter from "./Counter";

const CounterPage = () => {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);

  return (
    <div>
      <Counter
        count={count}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
    </div>
  );
};
export default CounterPage;
