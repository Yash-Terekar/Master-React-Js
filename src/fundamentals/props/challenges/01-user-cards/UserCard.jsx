const UserCard = ({ name, age, course }) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <h2>Course: {course}</h2>
    </div>
  );
};
export default UserCard;
