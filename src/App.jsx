import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {
    const [todos,setTodos]=useState([])
    const [newValue,setNewValue]=useState("")
    const [completed,setCompleted]=useState(todos)
  return (
    <>
      <main className="min-h-screen min-w-screen bg-hero-image bg-no-repeat bg-dark ">
        <div className="w-[540px] mx-auto pt-[50px]">
          <div className="flex justify-between items-center">
            <h1 className="text-white text-[40px] font-bold">TODO</h1>
            <img src="/images/icon-sun.svg" />
          </div>
          <AddTodo
            setTodos={setTodos}
            newValue={newValue}
            setNewValue={setNewValue}
          />
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      </main>
    </>
  );
}
export default App