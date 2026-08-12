const User = ({ name, role, company }) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Role: {role}</h2>
      <h2>Company: {company}</h2>
    </div>
  );
};
export default User;
