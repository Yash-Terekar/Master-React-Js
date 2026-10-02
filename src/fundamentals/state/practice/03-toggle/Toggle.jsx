import { useState } from "react";

const Toggle = () => {
  const [status, setStatus] = useState(false);

  const setOn = () => {
    setStatus(true);
  };
  const setOff = () => {
    setStatus(false);
  };

  return (
    <div>
      <h1>Status : {status ? "Off" : "On"}</h1>
      <button onClick={status ? setOff : setOn}>
        Turn {status ? "On" : "Off"}
      </button>
    </div>
  );
};
export default Toggle;
