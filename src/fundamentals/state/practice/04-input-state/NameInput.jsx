import { useState } from "react";

const NameInput = () => {
  const [input, setInput] = useState("");
  const inputChange = () => {
    setInput(document.getElementById("inputs").value);
  };
  const valueq = document.getElementById("inputs").value;
  //   for (let i = 0; i < valueq.length; i++) {}
  return (
    <div>
      <label htmlFor="inputs">Enter Your Name: </label>
      <input type="text" id="inputs" onChange={inputChange} />
      <h1>Hello {valueq}</h1>
    </div>
  );
};
export default NameInput;
