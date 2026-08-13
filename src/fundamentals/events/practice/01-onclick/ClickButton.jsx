const ClickButton = () => {
  const handleClick = () => {
    console.log("Button Click");
  };
  return (
    <div>
      <button onClick={handleClick}>Cleck me</button>
    </div>
  );
};
export default ClickButton;
