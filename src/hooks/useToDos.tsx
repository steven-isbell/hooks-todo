import { useState, useEffect } from 'react';

import ToDo from '../types/ToDo';
import { graphQLFetch } from '../utils';

const useToDos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(
    () => {
      graphQLFetch({
        query: `
        {
          todos {
            id
            text
            completed
          }
        }
        `
      })
        .then(response => setTodos(todos.concat(response.data.todos)))
        .catch(console.log);
    },
    [setTodos]
  );

  const addTodo = async (text: string) => {
    if (text) {
      try {
        const response = await graphQLFetch({
          query: `
          mutation {
            addTodo(text: "${text}") {
              id
              text
              completed
            }
          }
        `
        });
        setTodos(response.data.addTodo);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const checkTodo = (id: number) => {
    const todoCheck = todos.map((todo: ToDo) => {
      if (todo.id === id) {
        todo.checked = !todo.checked;
      }
      return todo;
    });
    setTodos(todoCheck);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo: ToDo) => todo.id !== id));
  };

  return {
    todos,
    addTodo,
    checkTodo,
    removeTodo
  };
};

export default useToDos;
