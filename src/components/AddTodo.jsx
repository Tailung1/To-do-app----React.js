import React from "react";
import { useState } from "react";

export default function AddTodo({
  setTodos,
  newValue,
  setNewValue,
  isDarkMode
  
}) {
  const handleAdd = () => {
    if (!newValue) return;
    setTodos((prevTodos) => [
      ...prevTodos,
      { todo: newValue, status: false, id: Math.random() },
    ]);
    setNewValue("");
  };

  return (
    <div className="mt-[48px] rounded-[20px] overflow-hidden relative">
      <input
        className={`w-full py-[23px] pl-[72px] text-[#767992] text-[18px] outline-none font-normal ${isDarkMode ? "bg-dark-blue" : "bg-[#FAFAFA]"}`}
        placeholder="Create a new todo ..."
        value={newValue}
        onChange={(event) => setNewValue(event.target.value)}
      />

      <button
        onClick={handleAdd}
        className="absolute top-0  right-0 py-[21.5px] px-[25px] bg-[#fc7f03] text-[white] text-[20px] hover:opacity-35"
      >
        {" "}
        Add
      </button>
    </div>
  );
}