const Skills = ({ skills }) => {
  return (
    <div>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};
export default Skills;
