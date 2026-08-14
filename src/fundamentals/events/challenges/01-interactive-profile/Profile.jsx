import ActionButton from "./ActionButton";

const Profile = ({ name }) => {
  return (
    <div>
      <p>========================================</p>
      <h1>{name}</h1>
      <h2>MCA Student</h2>
      <h2>Learning:</h2>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
      <ActionButton name={name} />
      <p>========================================</p>
    </div>
  );
};
export default Profile;
