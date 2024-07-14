import { useState } from "react";
import TodoItem from "./TodoItem";

export default function List({ TodoListArray, setTodoList }) {
  const [editName, setEditName] = useState("");

  const toggleTodo = (id) => {
    setTodoList(
      TodoListArray.map((todo, index) =>
        index === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodoList(TodoListArray.filter((_, index) => index !== id));
  };

  const updateTodo = (id, editName) => {
    setTodoList(
      TodoListArray.map((todo, index) => {
        return index === id ? { ...todo, name: editName } : todo;
      })
    );
  };

  // useEffect(() => {
  //   setTodoList(TodoListArray);
  // }, [TodoListArray]);

  return (
    <ul className="todo-list">
      {TodoListArray.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          toggleTodo={() => toggleTodo(index)}
          deleteTodo={() => deleteTodo(index)}
          setEditName={setEditName}
          updateTodo={() => updateTodo(index, editName)}
        />
      ))}
    </ul>
  );
}
