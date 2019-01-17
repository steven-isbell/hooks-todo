import { useState, useEffect } from 'react';

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

  const checkTodo = async (id: string) => {
    try {
      const response = await graphQLFetch({
        query: `
          mutation {
            completeTodo(id: "${id}") {
              id
              text
              completed
            }
          }
        `
      });

      setTodos(response.data.completeTodo);
    } catch (e) {
      console.log(e);
    }
  };

  const removeTodo = async (id: string) => {
    try {
      const response = await graphQLFetch({
        query: `
          mutation {
            deleteTodo(id: "${id}") {
              id
              text
              completed
            }
          }
        `
      });
      setTodos(response.data.deleteTodo);
    } catch (e) {
      console.log(e);
    }
  };

  return {
    todos,
    addTodo,
    checkTodo,
    removeTodo
  };
};

export default useToDos;
