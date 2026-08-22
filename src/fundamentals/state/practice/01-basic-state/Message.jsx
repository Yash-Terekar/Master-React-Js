import { useState } from "react";

const Message = () => {
  const [greet, setGreet] = useState("Hello React!");
  const changeGreeet = () => {
    setGreet("Welcome to React State!");
  };
  return (
    <>
      <h1>{greet}</h1>
      <button onClick={changeGreeet}>Change message</button>
    </>
  );
};
export default Message;
