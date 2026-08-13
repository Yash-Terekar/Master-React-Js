const InputHandler = () => {
  const handleEvent = (event) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <input type="text" onChange={handleEvent} />
    </div>
  );
};
export default InputHandler;
