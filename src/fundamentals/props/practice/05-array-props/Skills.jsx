const Skills = ({ skills }) => {
  return (
    <div>
      <ul>
        {skills.map((skill) => (
          <h2 key={skill}>{skill}</h2>
        ))}
      </ul>
    </div>
  );
};
export default Skills;
