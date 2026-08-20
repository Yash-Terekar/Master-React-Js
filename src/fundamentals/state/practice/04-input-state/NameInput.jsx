import { useState } from "react";

const NameInput = () => {
  const [input, setInput] = useState("");
  const inputChange = () => {
    setInput(document.getElementById("inputs").value);
  };
  return (
    <div>
      <label htmlFor="inputs">Enter Your Name: </label>
      <input type="text" id="inputs" onChange={inputChange} />
      <h1>Hello {input}</h1>
    </div>
  );
};
export default NameInput;
