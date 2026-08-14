const Keyboard = () => {
  const handleEvent = (event) => {
    console.log(`Key Pressed : ${event.key}`);
  };
  return (
    <div>
      <input onKeyDown={handleEvent} />
    </div>
  );
};
export default Keyboard;
