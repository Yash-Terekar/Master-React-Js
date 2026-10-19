import { useState } from "react";
import Counter from "./Counter";

const CounterPage = () => {
  const [count, setCount] = useState(0);
  //   const increase = () => setCount(count + 1);
  return (
    <div>
      <Counter count={count} />
      {/* <button onClick={increase}>+</button> */}
    </div>
  );
};
export default CounterPage;
