const Button = ({ text }) => {
  const handleEvent = () => {
    console.log(`${text} button clicked`);
  };
  return (
    <div>
      <button onClick={handleEvent}>{text}</button>
    </div>
  );
};
export default Button;
