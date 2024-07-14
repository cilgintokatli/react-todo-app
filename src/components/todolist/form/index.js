import { useEffect, useState } from "react";

// const InitialFormValues = {
//   name: "",
//   completed: false,
// };
export default function Form({
  todoList,
  addTodolist,
  setAllCompleted,
  allCompleted,
}) {
  const [input, setInput] = useState("");

  useEffect(() => {
    setAllCompleted(todoList.every((todo) => todo.completed));
  }, [allCompleted, setAllCompleted, todoList]);

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      addTodolist([...todoList, { name: input, completed: false }]);
      setInput("");
      // setAllCompleted(!todoList.every((todo) => todo.completed));
      // console.log("allCompleted after setting:", allCompleted);
    }
  };

  return (
    <input
      className="new-todo"
      type="text"
      onChange={onChangeInput}
      value={input}
      name="name"
      onKeyDown={handleSubmit}
    />
  );
}
