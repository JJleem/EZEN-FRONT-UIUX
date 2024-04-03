import "./App.css";
import Header from "./Components/Header";
import TodoEditor from "./Components/TodoEditor";
function App() {
  return (
    <div className="App">
      <Header />

      <TodoEditor />
      <div>Todo List</div>
    </div>
  );
}

export default App;
