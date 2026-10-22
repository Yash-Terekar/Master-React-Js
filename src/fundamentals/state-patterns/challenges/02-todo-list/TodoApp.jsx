import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const TodoApp = () => {
  const [todos, setTodos] = useState(["Hello", "List"]);
  const [inputValue, setInputValue] = useState("");
  const handleOnAdd = () => {
    if (inputValue.trim() === "") return;
    setTodos([...todos, inputValue]);
    setInputValue("");
  };
  //   console.log(todos);
  const handleDeleteTodo = (i) => {
    setTodos((prev) => prev.filter((_, index) => index !== i));
  };

  const [isChecked, setIsChecked] = useState([]);

  const handleToggleCheck = (index) => {
    if (isChecked.includes(index)) {
      setIsChecked(isChecked.filter((i) => i !== index));
    } else {
      setIsChecked([...isChecked, index]);
    }
  };
  return (
    <div>
      <p>=========================</p>
      <h1>Todo</h1>
      <TodoForm
        inputValue={inputValue}
        handleOnAdd={handleOnAdd}
        setInputValue={setInputValue}
      />
      <p>----------------------------------------</p>
      <TodoItem
        todos={todos}
        deleteTodo={handleDeleteTodo}
        setIsChecked={handleToggleCheck}
        isChecked={isChecked}
      />
      <p>=========================</p>
    </div>
  );
};
export default TodoApp;
