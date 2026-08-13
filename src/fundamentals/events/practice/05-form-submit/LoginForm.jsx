const LoginForm = () => {
  const handleEvent = (event) => {
    console.log("Form Submitted");
    event.preventDefault();
  };
  return (
    <div>
      <input type="email" required />
      <input type="password" required />
      <button onClick={handleEvent}>Submit</button>
    </div>
  );
};
export default LoginForm;
