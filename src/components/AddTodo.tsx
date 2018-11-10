import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

interface IAddToDoProps {
  handleInputChange: Function;
  value: string;
  addTodo: Function;
}

const AddTodo = React.memo(
  ({ handleInputChange, value, addTodo }: IAddToDoProps) => {
    return (
      <Paper style={{ margin: 16, padding: 16 }}>
        <Grid container>
          <Grid xs={10} md={11} style={{ paddingRight: 16 }} item>
            <TextField
              placeholder="ToDo Content"
              value={value}
              onChange={() => handleInputChange()}
            />
          </Grid>
          <Grid>
            <Button onClick={() => addTodo()}>Add</Button>
          </Grid>
        </Grid>
      </Paper>
    );
  }
);

export default AddTodo;
