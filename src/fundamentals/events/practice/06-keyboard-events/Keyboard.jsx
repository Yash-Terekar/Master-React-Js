const Keyboard = () => {
  const handleEvent = (event) => {
    console.log(`Key Pressed : ${event.key}`);
  };
  return (
    <div>
      <button onKeyDown={handleEvent}>Click me!</button>
    </div>
  );
};
export default Keyboard;
