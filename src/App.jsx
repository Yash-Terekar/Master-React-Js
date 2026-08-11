import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increament = () => setCount(count + 1);
  // const decreament = () => setCount(count - 1);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <button onClick={decreament}>+</button> */}

      <button
        onClick={increament}
        style={{
          padding: "10px 20px",
          backgroundColor: "greenyellow",
          border: "2px solid green",
          borderRadius: "10px",
        }}
      >
        Count {count}
      </button>
    </div>
  );
};

export default App;
