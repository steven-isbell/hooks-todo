import React from 'react';
import { render } from 'react-testing-library';

import ToDoList from './ToDoList';

test('ToDoList should render with props', () => {
  const items = [{ id: 1, text: 'Hello World', completed: false }];
  const handleItemDelete = jest.fn();
  const handleItemCheck = jest.fn();

  const props = {
    items,
    handleItemDelete,
    handleItemCheck
  };

  render(<ToDoList {...props} />);
});
