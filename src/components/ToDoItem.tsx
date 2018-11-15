import React, { useRef } from 'react';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';

interface IToDoItemProps {
  handleCheckToggle: React.MouseEventHandler;
  handleClick: React.MouseEventHandler;
  checked: boolean;
  divider: boolean;
  text: string;
}

const ToDoItem = React.memo(
  ({
    handleCheckToggle,
    handleClick,
    divider,
    checked,
    text
  }: IToDoItemProps) => {
    const itemTextRef = useRef(null);
    const checkToggleLineThrough = e => {
      handleCheckToggle(e);
      if (!itemTextRef.current.style.textDecoration) {
        itemTextRef.current.style.textDecoration = 'line-through';
      } else {
        itemTextRef.current.style.textDecoration = '';
      }
    };
    return (
      <ListItem divider={divider}>
        <Checkbox
          onClick={checkToggleLineThrough}
          checked={checked}
          disableRipple
        />
        <span
          ref={itemTextRef}
          style={{ textDecoration: checked ? 'line-through' : '' }}
        >
          <ListItemText primary={text} />
        </span>
        <ListItemSecondaryAction>
          <IconButton aria-label="Delete ToDo" onClick={handleClick}>
            <DeleteOutlined />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
);

export default ToDoItem;
