import { useState } from "react";

const Skills = () => {
  const [skill, setSkill] = useState(["Html", "Css", "JavaScript"]);

  const [inputValue, setInputValue] = useState("");

  const addSkill = () => {
    if (inputValue.trim() === "") return;
    setSkill([...skill, inputValue]);
    setInputValue("");
  };
  const removeSkill = () => {
    setSkill(skill.slice(0, -1));
  };

  return (
    <div>
      <h1>Skills</h1>
      <ul>
        {skill.map((skill) => (
          <li key={Math.random()}>{skill}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Enter Skill"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addSkill}>Add Skill</button>
      <button onClick={removeSkill}>Remove Skill</button>
    </div>
  );
};
export default Skills;
