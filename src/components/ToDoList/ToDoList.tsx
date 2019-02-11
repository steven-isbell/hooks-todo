import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';

import ToDoItem from '../ToDoItem/ToDoItem';

import ToDo from '../../types/ToDo';
interface IToDoListProps {
  items: ToDo[];
  handleItemDelete: Function;
  handleItemCheck: Function;
}

const ToDoList = React.memo(
  ({ items, handleItemDelete, handleItemCheck }: IToDoListProps) => (
    <Paper style={{ margin: 16 }}>
      <List style={{ overflow: 'scroll', paddingBottom: 0 }}>
        {items.map((item: ToDo) => {
          return (
            <ToDoItem
              key={item.id}
              divider={item.id !== items.length - 1}
              handleClick={() => handleItemDelete(item.id)}
              handleCheckToggle={() => handleItemCheck(item.id)}
              checked={item.completed}
              text={item.text}
            />
          );
        })}
      </List>
    </Paper>
  )
);

export default ToDoList;
