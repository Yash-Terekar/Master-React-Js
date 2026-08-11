const Skill = () => {
  const skills = ["JavaScript", "HTML", "CSS", "React"];
  return (
    <div>
      <h2>Skill</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skill;
