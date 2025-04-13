import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [newValue, setNewValue] = useState("");
  const [filter, setFilter] = useState("all");
  const [isDarkMode, setIsDarkMode] = useState(true);

  const filtredTodos = todos.filter((todo) =>
    filter === "All"
      ? true
      : filter === "Active"
      ? !todo.status
      : filter === "Completed"
      ? todo.status
      : true
  );
  return (
    <>
      <main
        className={`w-full h-screen  bg-no-repeat ${
          isDarkMode
            ? "bg-dark text-white bg-hero-image"
            : "bg-[#FAFAFA]text-black bg-mountains"
        }`}
      >
        <div className='w-[540px] mx-auto pt-[50px]'>
          <div className='flex justify-between items-center'>
            <h1 className='text-white text-[40px] font-bold'>TODO</h1>
            <img
              onClick={() => setIsDarkMode(!isDarkMode)}
              src='/images/icon-sun.svg'
            />
          </div>
          <AddTodo
            setTodos={setTodos}
            newValue={newValue}
            setNewValue={setNewValue}
            isDarkMode={isDarkMode}
          />
          <TodoList
            setFilter={setFilter}
            todos={filtredTodos}
            setTodos={setTodos}
            isDarkMode={isDarkMode}
          />
        </div>
      </main>
    </>
  );
}
export default App;
