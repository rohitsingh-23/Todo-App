import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    let todoObj = {
      title: title,
      time: Date.now(),
      completed: false,
      id: uuidv4(),
    };

    setTodos((prev) => [...prev, todoObj]);
  };

  const updateTodo = (id, title) => {
    setTodos(
      todos.map((item) => {
        if (item.id == id) {
          return {
            ...item,
            title: title,
          };
        }
        return item
      })
    );
  };

  const removeTodo = (id) => {
    let updatedTodos = todos.filter((item) => {
      if (item.id != id) {
        return true;
      }
    });
    setTodos(updatedTodos);
  };

  const toggleTodo = (id) => {
    let updatedTodos = todos.map((item) => {
      if (item.id == id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTodos(updatedTodos);
  };

  const providerState = {
    todos,
    addTodo,
    updateTodo,
    removeTodo,
    toggleTodo,
  };

  return (
    <TodoContext.Provider value={providerState}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  return useContext(TodoContext);
};
