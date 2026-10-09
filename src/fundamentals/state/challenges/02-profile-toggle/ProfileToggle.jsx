import { useState } from "react";

const ProfileToggle = () => {
  const name = "Yash Terekar";
  const course = "MCA";
  const skills = ["HTML", "JavsScript", "React", "MERN"];

  const [showSkills, setShowSkills] = useState(false);

  const hideSkills = () => {
    setShowSkills(false);
  };
  const showSkill = () => {
    setShowSkills(true);
  };
  return (
    <div>
      <p>=======================================</p>
      <h1>{name}</h1>
      <h2>{course}</h2>
      {showSkills ? (
        <ul>
          Skills:
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      ) : null}
      <button onClick={showSkills ? hideSkills : showSkill}>
        {showSkills ? "Hide " : "Show "}Skills
      </button>

      <p>========================================</p>
    </div>
  );
};
export default ProfileToggle;
