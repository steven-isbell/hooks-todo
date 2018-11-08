import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';

import ToDoItem from './ToDoItem';

interface IToDoListProps {
  items: Object[];
  handleItemDelete: React.MouseEventHandler;
  handleItemCheck: React.MouseEventHandler;
}

const ToDoList = ({
  items,
  handleItemDelete,
  handleItemCheck
}: IToDoListProps) =>
  Boolean(items.length) && (
    <Paper style={{ margin: 16 }}>
      <List style={{ overflow: 'scroll' }}>
        {items.map(item => (
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
  );

export default ToDoList;
