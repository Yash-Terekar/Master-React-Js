import { useState } from "react";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const turnOn = () => {
    setIsOn(true);
  };

  const turnOff = () => {
    setIsOn(false);
  };

  return (
    <div>
      <h1>Status{isOn ? "ON" : "OFF"}</h1>
      <button onClick={isOn ? turnOff : turnOn}>
        Turn {isOn ? "Off" : "On"}
      </button>
    </div>
  );
};
export default Toggle;
