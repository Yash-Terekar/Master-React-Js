import { useEffect, useState } from "react";

const MountMessage = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted");
  }, []);
  return (
    <div>
      <h1>Heading : {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Change Heading
      </button>
    </div>
  );
};
export default MountMessage;
