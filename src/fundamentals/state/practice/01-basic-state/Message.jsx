import { useState } from "react";

const Message = () => {
  const [msg, setMsg] = useState("Hello React!");
  const changeMsg = () => {
    setMsg("Welcome to React State!");
  };
  return (
    <div>
      <h1>{msg}</h1>
      <button onClick={changeMsg}>Change Message</button>
    </div>
  );
};
export default Message;
