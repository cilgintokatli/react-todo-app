import React, { useState } from "react";

function TodoItem({
  todo,
  index,
  toggleTodo,
  deleteTodo,
  updateTodo,
  setEditName,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.name);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setEditText(e.target.value);

    setEditName(e.target.value);
  };

  const handleBlur = (index) => {
    setIsEditing(false);
    updateTodo(editText);
  };

  //   const toggleTodo = (id) => {
  //     console.log("selam");
  //     console.log("id", id);
  //   };

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={toggleTodo}
        />
        {isEditing ? (
          <input
            className="edit"
            value={editText}
            onChange={handleChange}
            onBlur={() => handleBlur(index)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleBlur();
              }
            }}
            autoFocus
          />
        ) : (
          <label className="todo-text" onDoubleClick={handleEdit}>
            {todo.name}
          </label>
        )}
        <button className="destroy" onClick={deleteTodo}></button>
      </div>
    </li>
  );
}

export default TodoItem;
