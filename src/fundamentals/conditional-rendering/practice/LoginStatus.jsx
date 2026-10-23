import { useState } from "react";

const LoginStatus = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <h1>{isLoggedIn ? "Welcome back!" : "Please log in"}</h1>
      <button onClick={() => setIsLoggedIn(isLoggedIn ? false : true)}>
        {isLoggedIn ? "Log out" : "Log in"}
      </button>
    </div>
  );
};
export default LoginStatus;
