const ProfileCard = ({ name, age, course, skills, status }) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <h2>Course: {course}</h2>
      <h2>Skills: </h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <h2>Status: {status}</h2>
    </div>
  );
};
export default ProfileCard;
