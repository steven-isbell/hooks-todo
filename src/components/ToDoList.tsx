import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';

import ToDoItem from './ToDoItem';

import ToDo from '../types/ToDo';
interface IToDoListProps {
  items: any[];
  handleItemDelete: Function;
  handleItemCheck: Function;
}

const ToDoList = React.memo(
  ({ items, handleItemDelete, handleItemCheck }: IToDoListProps) =>
    items.length > 0 ? (
      <Paper style={{ margin: 16 }}>
        <List style={{ overflow: 'scroll' }}>
          {items.map((item: ToDo) => (
            <ToDoItem
              key={item.id}
              divider={item.id !== items.length - 1}
              handleClick={() => handleItemDelete(item.id)}
              handleCheckToggle={() => handleItemCheck(item.id)}
              checked={item.checked}
              text={item.text}
            />
          ))}
        </List>
      </Paper>
    ) : null
);

export default ToDoList;
