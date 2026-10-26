import { useEffect, useState } from "react";

const LiveTimer = () => {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (start) {
      const timer = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [start]);

  return (
    <div>
      <h1>Count : {count}</h1>
      <button disabled={start} onClick={() => setStart(true)}>
        Start
      </button>
      <button disabled={!start} onClick={() => setStart(false)}>
        Stop
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
      <h1>Elapsed Time: {count}</h1>
    </div>
  );
};
export default LiveTimer;
