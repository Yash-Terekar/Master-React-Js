import { useState } from "react";

const CounterMessage = () => {
  const [count, setCount] = useState(0);
  return <div>Count {count}</div>;
};
export default CounterMessage;
