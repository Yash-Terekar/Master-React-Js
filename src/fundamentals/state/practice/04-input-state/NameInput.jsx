import { useState } from "react";

const NameInput = () => {
  const [history, setHistory] = useState([]);

  const inputText = (e) => {
    const newValue = e.target.value;
    // Append the current input value to the history array
    setHistory((prevHistory) => [...prevHistory, newValue]);
  };

  return (
    <div>
      <input type="text" onChange={inputText} />
      {history.map((text, index) => (
        <h1 key={index}>Hello {text}</h1>
      ))}
    </div>
  );
};

export default NameInput;
