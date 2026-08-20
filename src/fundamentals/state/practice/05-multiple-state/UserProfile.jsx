import { useState } from "react";

const UserProfile = () => {
  const [name, setName] = useState("Yash");
  const [age, setAge] = useState(26);

  const changeName = () => {
    setName("Yash Manoj Terekar");
  };
  const changeAge = () => {
    setAge(age + 1);
  };
  return (
    <div>
      <h1>Name {name}</h1>
      <h1>Age {age}</h1>
      <button onClick={changeName}>Change Name</button>
      <button onClick={changeAge}>Increase Age</button>
    </div>
  );
};
export default UserProfile;
