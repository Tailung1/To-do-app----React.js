import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [todos,setTodos]=useState([])
    const [newValue,setNewValue]=useState("")

    const handleAdd=()=> {
        setTodos((prevTodos)=>[...prevTodos,
            {todo:newValue,
            status:false,
            id:Math.random()}])
        setNewValue("");
    }

    const handleCheck=(event,id)=> {
        setTodos(prevTodos => [...prevTodos.map(todo=>
            todo.id === id
            ? {...todo,status:event.target.checked}
            : todo
            
        )])
    }
    const handleDelete=(id)=>{
        setTodos(prevTodos=>[...prevTodos.filter(todo => 
            todo.id !== id
        )])
    }
  return (
    <>
    <input type='text'  value={newValue} onChange={(event)=>
        setNewValue(event.target.value)}/>

    <button onClick={handleAdd}>Add</button>

    <ul>
        {todos.map((item)=>(
            <li key={item.id} style={{textDecoration: item.status? "line-through":null}} > 
                <input onChange={(event)=>
                handleCheck(event,item.id)}
                type="checkbox" />
                {item.todo}
                <button>edit</button>
                <button onClick={()=>handleDelete(item.id)}>delete</button>
            </li>
        ))}
    </ul>
    </>
  )
}
export default App
