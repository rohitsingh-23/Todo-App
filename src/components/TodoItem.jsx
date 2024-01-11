import React, { useState } from "react";
import { useTodoContext } from "../context/TodoContext";
import { Check, Pencil, Trash } from "lucide-react";

const TodoItem = ({ item }) => {
  const [edit, setEdit] = useState(false);
  const [editedText, setEditedText] = useState(item.title);
  const { removeTodo, toggleTodo, updateTodo } = useTodoContext();

  const handleEdit = () => {
    if (edit) {
      updateTodo(item.id, editedText);
    }
    setEdit((prev) => !prev);
  };

  return (
    <div className="todo-container">
      {!edit ? (
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => toggleTodo(item.id)}
        />
      ) : (
        <input
          type="text"
          value={editedText}
          className="updated-text-input"
          onChange={(e) => setEditedText(e.target.value)}
        />
      )}
      {!edit && <p>{item.title} </p>}

      <button
        className={!edit ? "edit-btn" : "edit-btn edit-btn-round"}
        onClick={() => {
          handleEdit();
        }}
      >
        {!edit ? <Pencil size="20px" /> : <Check size="20px" />}
      </button>

      {!edit && (
        <button className="delete-btn" onClick={() => removeTodo(item.id)}>
          <Trash size="20px" />
        </button>
      )}
    </div>
  );
};

export default TodoItem;
