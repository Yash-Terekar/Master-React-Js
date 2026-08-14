const LoginForm = () => {
  const handleEvent = (event) => {
    event.preventDefault();
    console.log(event);

    const formData = new FormData(event.currentTarget);
    const mail = formData.get("email");
    const pass = formData.get("password");

    console.log(mail);
    console.log(pass);
    console.log("Login Submited");
  };
  return (
    <div>
      <form onSubmit={handlEvent}>
        <label htmlFor="mail">Email</label>
        <input type="email" id="mail" name="email" />
        <label htmlFor="pass">Password</label>
        <input type="password" id="pass" name="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default LoginForm;
