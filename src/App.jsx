import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [todos,setTodos]=useState([])
    const [newValue,setNewValue]=useState("")

    const handleAdd=()=> {
        setTodos((prevTodos)=>[...prevTodos,
            {todo:newValue,status:false,id:Math.random()}])
        setNewValue("");
    }
   
  return (
    <>
    <input type='text'  value={newValue} onChange={(event)=>
        setNewValue(event.target.value)}/>

    <button onClick={handleAdd}>Add</button>

    <ul>
        {todos.map((item)=>(
            <li key={item.id}>
                <input type="checkbox" />
                {item.todo}
            </li>
        ))}
    </ul>
    </>
  )
}
export default App
