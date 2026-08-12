const UserCard = (props) => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h2>Age: {props.age}</h2>
      <h2>Course: {props.course}</h2>
    </div>
  );
};
export default UserCard;
