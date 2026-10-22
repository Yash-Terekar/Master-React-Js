import { useState } from "react";

const TodoItem = ({ todos, deleteTodo, setIsChecked, isChecked }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ul>
        {todos.map((todo, index) => {
          const che = isChecked.includes(index);
          return (
            <h2 key={index}>
              {" "}
              <input
                type="checkbox"
                style={{ marginRight: 20 }}
                checked={che}
                onChange={() => setIsChecked(index)}
              />
              {todo}{" "}
              <button
                style={{ height: 20, width: 40, marginLeft: 20 }}
                onClick={() =>
                  che ? deleteTodo(index) : console.log("Checked it first")
                }
              >
                Del
              </button>
            </h2>
          );
        })}
      </ul>
    </div>
  );
};
export default TodoItem;
