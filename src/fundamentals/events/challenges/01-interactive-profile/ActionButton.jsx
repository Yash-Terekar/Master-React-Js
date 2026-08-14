const ActionButton = ({ name }) => {
  const handleEvent = () => {
    console.log(`Hello from ${name}`);
  };
  return (
    <div>
      <button onClick={handleEvent}>Say Hello</button>
    </div>
  );
};
export default ActionButton;
