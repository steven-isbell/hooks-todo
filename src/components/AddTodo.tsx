import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

interface IAddToDoProps {
  handleInputChange: React.ChangeEventHandler;
  handleInputKeypress: React.KeyboardEventHandler;
  value: string;
}

const AddTodo = ({
  handleInputChange,
  handleInputKeypress,
  value
}: IAddToDoProps) => {
  return (
    <Paper style={{ margin: 16, padding: 16 }}>
      <Grid container>
        <Grid xs={10} md={11} style={{ paddingRight: 16 }} item>
          <TextField
            placeholder="ToDo Content"
            value={value}
            onKeyPress={handleInputKeypress}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid>
          <Button>Add</Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AddTodo;
