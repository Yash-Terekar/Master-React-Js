const ClickButton = () => {
  const handleClick = () => {
    console.log("Button was clicked!");
  };
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};
export default ClickButton;
