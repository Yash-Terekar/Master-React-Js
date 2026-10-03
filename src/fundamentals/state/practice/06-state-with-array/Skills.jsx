import { useState } from "react";

const Skills = () => {
  const skills = ["JavaScript", "Dsa"];
  const [skill, setSkill] = useState(skills);
  return (
    <div>
      <ul>
        {skill.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
      <button onClick={() => setSkill([...skill, "React"])}>Add React</button>
    </div>
  );
};
export default Skills;
