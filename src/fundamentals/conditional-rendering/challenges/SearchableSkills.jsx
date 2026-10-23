import { useState } from "react";

const SearchableSkills = () => {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"];

  const [inputValue, setInputValue] = useState("");

  const searchItem = inputValue.toLowerCase();

  const filterdSkill = skills.filter((skill) =>
    skill.toLowerCase().includes(searchItem),
  );

  const handleClear = () => {
    setInputValue("");
  };
  return (
    <div>
      <h1>SearchableSkills</h1>

      <input
        type="text"
        placeholder="Find Skill"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleClear}> Clear Search Input</button>

      <ul>
        {filterdSkill.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      {filterdSkill.length <= 0 && <p>No Skill Found</p>}
    </div>
  );
};
export default SearchableSkills;
