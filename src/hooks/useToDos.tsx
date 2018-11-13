import { useState, useEffect } from 'react';

import ToDo from '../types/ToDo';

const useToDos = (initialValue: ToDo[] = []) => {
  const [todos, setTodos] = useState(initialValue);
  const [id, setId] = useState(0);

  useEffect(() => {
    fetch({
      method: 'POST',
      url: 'http://localhost:3001/graphql',
      body: JSON.stringify({
        query: `
          todos {
            id
            text
            completed
          }
        `
      })
    })
      .then((response: { json: Function }) => response.json())
      .then(console.log);
  }, []);

  return {
    todos,
    addTodo(text: string) {
      if (text) {
        setTodos(todos.concat({ id, text, checked: false }));
        setId(id + 1);
      }
    },
    checkTodo(id: number) {
      const todoCheck = todos.map((todo: ToDo) => {
        if (todo.id === id) {
          todo.checked = !todo.checked;
        }
        return todo;
      });
      setTodos(todoCheck);
    },
    removeTodo(id: number) {
      setTodos(todos.filter((todo: ToDo) => todo.id !== id));
    }
  };
};

export default useToDos;
