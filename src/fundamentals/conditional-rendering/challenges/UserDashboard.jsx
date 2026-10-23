import { useState } from "react";

const UserDashboard = () => {
  const [notification, setNotification] = useState(0);
  const [isLogged, setIsLogged] = useState(true);
  return (
    <div>
      {isLogged ? (
        <>
          {notification > 0 && <h2>Notifications: {notification}</h2>}
          <h1>Yash Terekar</h1>
          <h2>Age : 23</h2>
          <h2>Course : MCA</h2> <h2>Domain : Full Stack</h2>
        </>
      ) : (
        <h1>Please log in to view your profile</h1>
      )}

      <button
        onClick={isLogged ? () => setIsLogged(false) : () => setIsLogged(true)}
      >
        {isLogged ? "Log out" : "Login"}
      </button>
      {isLogged && (
        <button onClick={() => setNotification((prev) => prev + 1)}>
          Notification Count
        </button>
      )}
    </div>
  );
};
export default UserDashboard;
