import { useState } from "react";

const UserProfile = () => {
  const [users, setUsers] = useState({
    name: "Yash",
    age: 22,
    course: "MCA",
  });
  const changeName = () =>
    setUsers((prev) => ({ ...prev, name: "Yash Terekar" }));
  const increaseAge = () =>
    setUsers((prev) => ({ ...prev, age: prev.age + 1 }));
  return (
    <div>
      <h1>Name: {users.name}</h1>
      <h1>Age: {users.age}</h1>
      <h1>Course: {users.course}</h1>
      <button onClick={changeName}>Change Name</button>
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  );
};
export default UserProfile;
