const TodoItem = ({ todos, deleteTodo }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ul>
        {todos.map((todo) => (
          <h2 key={Math.random()}>
            {" "}
            <input type="checkbox" style={{ marginRight: 20 }} />
            {todo}{" "}
            <button
              style={{ height: 20, width: 40, marginLeft: 20 }}
              onClick={deleteTodo}
            >
              Del
            </button>
          </h2>
        ))}
      </ul>
    </div>
  );
};
export default TodoItem;
