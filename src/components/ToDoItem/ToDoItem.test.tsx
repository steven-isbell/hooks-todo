import React from 'react';
import { render } from 'react-testing-library';

import ToDoItem from './ToDoItem';

test('ToDoItem should render with props', () => {
  const handleCheckToggle = jest.fn();
  const handleClick = jest.fn();
  const checked = false;
  const divider = false;
  const text = 'Hello world';

  const props = {
    handleCheckToggle,
    handleClick,
    checked,
    divider,
    text
  };
  render(<ToDoItem {...props} />);
});
