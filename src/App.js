import "./App.css";
import TodoList from "./components/todolist/";

function App() {
  return (
    <div className="App">
      <section className="todoapp">
        <TodoList></TodoList>
      </section>
      <footer class="info">
        <p>made by Okan Şahin</p>
      </footer>
    </div>
  );
}

export default App;
