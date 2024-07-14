import { useEffect, useState } from "react";
import List from "./list";
import Form from "./form";

const InitialTodoList = [
  {
    name: "okan",
    completed: false,
  },
  {
    name: "müjü",
    completed: false,
  },
  {
    name: "fazlı",
    completed: true,
  },
];
export default function TodoList() {
  const [todoList, setTodolist] = useState(InitialTodoList);
  const [filter, setFilter] = useState("all");
  const [allCompleted, setAllCompleted] = useState(false);

  const filteredTodos = todoList.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const markAllasCompleted = () => {
    setTodolist(
      todoList.map((todo) => {
        return { ...todo, completed: !allCompleted };
      })
    );
    console.log("selam");
  };

  const [completedTodosLenght, setCompletedTodosLenght] = useState(
    todoList.filter((todo) => !todo.completed).length
  );

  useEffect(() => {
    setCompletedTodosLenght(todoList.filter((todo) => !todo.completed).length);
  }, [todoList, allCompleted]);

  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <Form
          addTodolist={setTodolist}
          todoList={todoList}
          setAllCompleted={setAllCompleted}
          allCompleted={allCompleted}
        ></Form>
      </header>
      <section className="main">
        <input
          className="toggle-all"
          type="checkbox"
          checked={allCompleted}
          onChange={markAllasCompleted}
        />
        <label htmlFor="toggle-all" onClick={markAllasCompleted}>
          Mark all as complete
        </label>
        <List TodoListArray={filteredTodos} setTodoList={setTodolist}></List>
      </section>

      <footer className="footer">
        <span className="todo-count">
          <strong>{completedTodosLenght} </strong>
          items left
        </span>

        <ul className="filters">
          <li>
            <button
              className={filter === "all" ? "selected" : ""}
              onClick={() => setFilter("all")}
            >
              All
            </button>
          </li>
          <li>
            <button
              className={filter === "active" ? "selected" : ""}
              onClick={() => setFilter("active")}
            >
              Active
            </button>
          </li>
          <li>
            <button
              className={filter === "completed" ? "selected" : ""}
              onClick={() => setFilter("completed")}
              disabled={todoList.filter((todo) => todo.completed).length === 0}
            >
              Completed
            </button>
          </li>
        </ul>

        <button
          className="clear-completed"
          onClick={() =>
            setTodolist(todoList.filter((todo) => !todo.completed))
          }
        >
          Clear completed
        </button>
      </footer>
    </>
  );
}
