import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

interface IAddToDoProps {
  handleInputChange: Function;
  handleAddTodo: Function;
  clearInput: Function;
  handleEnter: Function;
  value: string;
}

const AddTodo = React.memo(
  ({
    handleInputChange,
    value,
    handleAddTodo,
    clearInput,
    handleEnter
  }: IAddToDoProps) => {
    const addTodoCallback = () => {
      clearInput();
      handleAddTodo(value);
    };

    return (
      <Paper style={{ margin: 16, padding: 16 }}>
        <Grid container>
          <Grid xs={10} md={11} style={{ paddingRight: 16 }} item>
            <TextField
              placeholder="ToDo Content"
              value={value}
              onChange={e => handleInputChange(e)}
              onKeyPress={e => handleEnter(e, addTodoCallback)}
            />
          </Grid>
          <Grid>
            <Button
              onClick={() => {
                addTodoCallback();
              }}
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </Paper>
    );
  }
);

export default AddTodo;
