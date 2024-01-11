import React, { useContext } from "react";
import { useTodoContext } from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useTodoContext();

  return (
    <div className="todos-item-container">
      {todos.length == 0 && (
        <div className="todo-container-help-text">
          <h1>Your Todos Will Be Shown Here...</h1>
        </div>
      )}
      {todos.length > 0 &&
        todos.map((item) => {
          return <TodoItem key={item.id} item={item} />;
        })}
    </div>
  );
};

export default TodoList;
