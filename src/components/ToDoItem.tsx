import * as React from 'react';
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

const ToDoItem = ({
  handleCheckToggle,
  handleClick,
  divider,
  checked,
  text
}: IToDoItemProps) => (
  <ListItem divider={divider}>
    <Checkbox onClick={handleCheckToggle} checked={checked} disableRipple />
    <ListItemText primary={text} />
    <ListItemSecondaryAction>
      <IconButton aria-label="Delete ToDo" onClick={handleClick}>
        <DeleteOutlined />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

export default ToDoItem;
