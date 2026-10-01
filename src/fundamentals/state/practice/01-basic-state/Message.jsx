import { useState } from "react";

const Message = () => {
  const [message, setMessage] = useState("Hello React!");
  function changeMSG() {
    setMessage("Welcome to React State!");
  }
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={changeMSG}>Change Msg</button>
    </div>
  );
};
export default Message;
