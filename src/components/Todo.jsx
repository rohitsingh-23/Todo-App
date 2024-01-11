import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Todo = () => {
  return (
    <div className="todos-container">
      <h1 className="app-title">Todo</h1>
          <TodoInput />
          <hr className="divider"/>
      <TodoList />
    </div>
  );
};

export default Todo;
