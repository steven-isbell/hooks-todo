import React from 'react';
import Paper from '@material-ui/core/Paper';

import Header from './components/Header/Header';
import AddToDo from './components/AddTodo/AddTodo';
import Loader from './components/Loader/Loader';

import useInputValue from './hooks/useInputValue';
import useToDos from './hooks/useToDos';

import './App.css';

const ToDoList = React.lazy(() => import('./components/ToDoList/ToDoList'));

// TODO: Create Cache and hit graphql service (simple)

const App = () => {
  const { inputValue, changeInput, clearInput, handleEnter } = useInputValue();
  const { todos, addTodo, removeTodo, checkTodo } = useToDos();

  return (
    <Paper
      elevation={0}
      style={{ padding: 0, margin: 0, backgroundColor: 'inherit' }}
    >
      <Header />
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <AddToDo
          value={inputValue}
          handleInputChange={changeInput}
          handleEnter={handleEnter}
          handleAddTodo={addTodo}
          clearInput={clearInput}
        />
        {Boolean(todos.length) && (
          <React.Suspense fallback={<Loader />}>
            <ToDoList
              items={todos}
              handleItemCheck={checkTodo}
              handleItemDelete={removeTodo}
            />
          </React.Suspense>
        )}
      </div>
    </Paper>
  );
};

export default App;
