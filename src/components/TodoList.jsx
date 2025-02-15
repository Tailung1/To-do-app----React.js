import React, { use, useState } from "react";

export default function TodoList({
  todos,
  setTodos,
  setFilter
}) {
  const [editId, setEditId] = useState("");
  const [editTodo, setEditTodo] = useState("");

  const handleCheck = (event, id) => {
    setTodos((prevTodos) => [
      ...prevTodos.map((todo) =>
        todo.id === id ? { ...todo, status: event.target.checked } : todo
      ),
    ]);
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => [...prevTodos.filter((todo) => todo.id !== id)]);
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setEditTodo(item.todo);
  };

  const handleSave = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === editId ? { ...todo, todo: editTodo } : todo
      )
    );
    setEditId("");
  };

  const handleClearCompleted=()=> (
    setTodos(prevTodos =>prevTodos.filter(todo => !todo.status))
  )
  
  return (
    <>
      <ul className="w-full bg-dark-blue mt-[24px] ">
        {todos.map((item) => (
          <li
            key={item.id}
            className=" flex items-center gap-4 py-[20px] px-[24px]  "
          >
            <input
              className="appearance-none w-6 h-6 rounded-full border-2 border-gray-300 checked:border-none checked:bg-[linear-gradient(to_bottom_right,#55DDFF,#C058F3)] flex items-center justify-center"
              onChange={(event) => handleCheck(event, item.id)}
              type="checkbox"
            />
            {item.id === editId ? (
              <input
                value={editTodo}
                type="text"
                onChange={(event) => setEditTodo(event.target.value)}
              />
            ) : (
              <span
                className={`${
                  item.status ? "line-through text-[#4D5067]" : "text-[#C8CBE7]"
                }  text-[20px] text-[]`}
              >
                {item.todo}
              </span>
            )}

            <div className="ml-auto flex gap-4">
              <button
                className=" text-blue-600 mr-5 text-[20px]"
                onClick={() =>
                  item.id === editId ? handleSave() : handleEdit(item)
                }
              >
                {item.id === editId ? "Save" : "Edit"}
              </button>

              <button
                className="text-[red] text-[20px]"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
        <div className="flex justify-between px-4 py-2 border-t border-gray-700">
          <p className="text-indicatorColor cursor-pointer">
            {todos.length} items left
          </p>
          <div className="flex gap-x-[19px] cursor-pointer">
            <p
              onClick={() => setFilter("All")}
              className="text-[#3A7CFD] cursor-pointer"
            >
              All
            </p>
            <p
              onClick={() => setFilter("Active")}
              className="text-indicatorColor cursor-pointer"
            >
              Active
            </p>
            <p
              onClick={() => setFilter("Completed")}
              className="text-indicatorColor cursor-pointer"
            >
              Completed
            </p>
          </div>

          <p
            onClick={ handleClearCompleted}
            className="text-indicatorColor cursor-pointer"
          >
            Clear Completed
          </p>
        </div>
      </ul>
    </>
  );
}
