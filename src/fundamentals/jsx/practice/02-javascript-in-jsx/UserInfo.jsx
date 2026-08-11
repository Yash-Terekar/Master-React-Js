import React from "react";

const UserInfo = () => {
  const name = "Yash Manoj Terekar";
  const age = 23;
  const course = "MCA";
  const isLearningReact = true;
  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
      <h1>Course: {course}</h1>
      <h1>Learning React: {isLearningReact ? "Yes" : "No"}</h1>
    </div>
  );
};

export default UserInfo;
