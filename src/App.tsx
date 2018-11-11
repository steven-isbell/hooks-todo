import React from 'react';
import Paper from '@material-ui/core/Paper';

import Header from './components/Header';
import AddToDo from './components/AddTodo';
import Loader from './components/Loader';

import useInputValue from './hooks/useInputValue';
import useToDos from './hooks/useToDos';

import './App.css';
// import ToDoList from './components/ToDoList';

const ToDoList = React.lazy(() => import('./components/ToDoList'));

const App = () => {
  const { inputValue, changeInput, clearInput, handleEnter } = useInputValue();
  const { todos, addTodo, removeTodo, checkTodo } = useToDos();

  return (
    <React.Suspense fallback={<Loader />}>
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
          <ToDoList
            items={todos}
            handleItemCheck={checkTodo}
            handleItemDelete={removeTodo}
          />
        </div>
      </Paper>
    </React.Suspense>
  );
};

export default App;
