import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';

import ToDoItem from './ToDoItem';

type Item = {
  id: number;
  checked: boolean;
  text: string;
};
interface IToDoListProps {
  items: any[];
  handleItemDelete: Function;
  handleItemCheck: Function;
}

const ToDoList = React.memo(
  ({ items, handleItemDelete, handleItemCheck }: IToDoListProps) => (
    <Paper style={{ margin: 16 }}>
      <List style={{ overflow: 'scroll' }}>
        {items.length > 0 &&
          items.map((item: Item) => (
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
  )
);

export default ToDoList;
