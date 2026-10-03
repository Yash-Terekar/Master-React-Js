import { useState } from "react";

const UserProfile = () => {
  const [name, setName] = useState("Yash");
  const [age, setAge] = useState(22);

  return (
    <div>
      <h1>Name : {name}</h1>
      <h1>Age : {age}</h1>
      <button onClick={() => setName("Yash Terekar")}>Change Name</button>
      <button onClick={() => setAge(age + 1)}>Increase Age</button>
    </div>
  );
};
export default UserProfile;
