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
          <li>{skill}</li>
        ))}
      </ul>
      <button onClick={showSkill ? showMySkills : hideMySkill}>
        {showMySkills ? "Show Skills" : "Hide Skills"}
      </button>
    </div>
  );
};
export default ProfileToggle;
