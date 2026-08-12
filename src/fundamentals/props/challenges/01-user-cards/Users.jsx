import UserCard from "./UserCard";

const Users = () => {
  return (
    <div>
      <UserCard name="Yash Terekar" course="MCA" age={23} />
      <UserCard name="Rahul" course="BSc" age={22} />
      <UserCard name="Priya" course="BCA" age={21} />
    </div>
  );
};
export default Users;
