import { useState } from "react";

const UserProfile = () => {
  const [name, setName] = useState("Yash");
  return (
    <div>
      <h1>Name {name}</h1>
    </div>
  );
};
export default UserProfile;
