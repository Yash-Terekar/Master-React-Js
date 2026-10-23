import { useState } from "react";

const Notification = () => {
  const [notificationCount, setNotificationCount] = useState(0);
  return (
    <div>
      <h1>Notifications : {notificationCount}</h1>
      <h1>
        {notificationCount > 0
          ? "You have an notification"
          : "No new notifications"}
      </h1>

      {notificationCount < 0 ? (
        (alert("you cannot negative notification"), setNotificationCount(0))
      ) : (
        <button onClick={() => setNotificationCount((prev) => prev - 1)}>
          -
        </button>
      )}

      <button onClick={() => setNotificationCount((prev) => prev + 1)}>
        +
      </button>
    </div>
  );
};
export default Notification;
