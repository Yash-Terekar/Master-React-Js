import { useEffect, useState } from "react";

const UserGreeting = ({ name }) => {
  useEffect(() => {
    document.title = `Welcome ${name}`;
  }, [name]);

  return (
    <div>
      <h1>Hello {name}!</h1>
    </div>
  );
};
export default UserGreeting;
