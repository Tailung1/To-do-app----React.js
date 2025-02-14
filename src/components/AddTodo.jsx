import React from "react";

export default function AddTodo({setTodos,newValue,setNewValue}) {
    const handleAdd=()=> {
        if(!newValue) return;
        setTodos((prevTodos)=>[...prevTodos,
            {todo:newValue,
            status:false,
            id:Math.random()}])
        setNewValue("");
    }
    return (
       <div className="mt-[48px] relative">
            <input
            className="w-full py-[23px] pl-[72px] bg-dark-blue text-[#767992] text-[18px] outline-none font-normal"
            placeholder='Create a new todo ...'
            value={newValue} onChange={(event)=>
            setNewValue(event.target.value)}
            />

            <button onClick={handleAdd}
            className="absolute top-0  right-0 py-[21.5px] px-[25px] bg-[#fc7f03] text-[white] text-[20px] hover:opacity-35">Add</button>
       </div>
    )
}