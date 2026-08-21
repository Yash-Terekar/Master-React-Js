import { useState } from "react";

const Skills = () => {
  const skills = ["JavaScript", "HTML", "CSS"];

  const [skill, setSkill] = useState(skills);
  const addReact = () => {
    setSkill("React");
  };
  return (
    <div>
      <ul>
        {skill.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <button onClick={addReact}>Add React</button>
    </div>
  );
};
export default Skills;
