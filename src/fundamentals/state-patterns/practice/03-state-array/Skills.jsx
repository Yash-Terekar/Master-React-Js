import { useState } from "react";

const Skills = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}
      <h1>Hello</h1>
    </div>
  );
};
export default Skills;
