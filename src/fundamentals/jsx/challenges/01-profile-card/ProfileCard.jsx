import React from "react";

const ProfileCard = () => {
  const name = "Yash Terekar";
  const age = 23;
  const course = "MCA";
  const skills = ["JavaScript", "HTML", "CSS", "React"];
  const status = "Learning React";
  return (
    <div>
      <p>--------------------------------</p>
      <h1>Profile</h1>
      <p>--------------------------------</p>

      <h2>Name : {name}</h2>
      <h2>Course : {course}</h2>
      <h2>Age : {age}</h2>

      <h2>Skills : </h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      <h2>Status : {status}</h2>
    </div>
  );
};

export default ProfileCard;
