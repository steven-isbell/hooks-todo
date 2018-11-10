import React from 'react';
import Paper from '@material-ui/core/Paper';
import Header from './components/Header';

import AddToDo from './components/AddTodo';
import ToDoList from './components/ToDoList';

import useInputValue from './hooks/useInputValue';
import useToDos from './hooks/useToDos';

const App = () => {
  const { inputValue, changeInput, clearInput, keyInput } = useInputValue();
  const { todos, addTodo, removeTodo, checkTodo } = useToDos();
  return (
    <Paper
      elevation={0}
      style={{ padding: 0, margin: 0, backgroundColor: '#fafafa' }}
    >
      <Header />
      <AddToDo
        inputValue={inputValue}
        handleInputChange={changeInput}
        // handleInputKeypress={keyInput}
        handleButtonClick={clearInput}
        addTodo={addTodo}
      />
      <ToDoList
        items={todos}
        handleItemCheck={checkTodo}
        handleItemDelete={removeTodo}
      />
    </Paper>
  );
};

export default App;
