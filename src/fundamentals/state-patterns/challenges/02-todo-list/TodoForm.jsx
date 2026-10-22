const TodoForm = ({ inputValue, handleOnAdd, setInputValue }) => {
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleOnAdd}>Add</button>
    </div>
  );
};
export default TodoForm;
