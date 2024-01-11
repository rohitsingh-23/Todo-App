import React, { useState } from "react";
import { useTodoContext } from "../context/TodoContext";
import { Plus } from "lucide-react";

const TodoInput = () => {
  const [text, setText] = useState("");
  const { addTodo } = useTodoContext();

  return (
    <div className="todo-input-container">
      <input
        type="text"
        placeholder="Add Todo..."
        value={text}
        className="todo-input"
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className={text.length == 0 ? "add-btn" : "add-btn add-green-btn"}
        onClick={() => {
          if (text) {
            addTodo(text);
            setText("");
          } else {
            alert("Please Enter Todo");
          }
        }}
      >
        <Plus />
      </button>
    </div>
  );
};

export default TodoInput;
