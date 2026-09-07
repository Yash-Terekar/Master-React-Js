import { useState } from "react";

const ProfileToggle = () => {
  const skills = ["JavaScript", "HTML", "CSS", "React"];
  const [showSkill, setShowSkill] = useState(skills);
  const showMySkills = () => {
    setShowSkill(skills);
  };
  const hideMySkill = () => {
    setShowSkill([]);
  };
  return (
    <div>
      <h1>Yash Terekar</h1>
      <h2>MCA Student</h2>
      <h2>Skills</h2>
      <ul>
        {showSkill.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <button onClick={showSkill.length === 0 ? showMySkills : hideMySkill}>
        {showSkill.length === 0 ? "Show Skills" : "Hide Skills"}
      </button>
    </div>
  );
};
export default ProfileToggle;
