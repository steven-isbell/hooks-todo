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

test('ToDoList renders the right text for each item', () => {
  const items = [{ id: 1, text: 'Hello World', completed: false }];
  const handleItemDelete = jest.fn();
  const handleItemCheck = jest.fn();

  const props = {
    items,
    handleItemDelete,
    handleItemCheck
  };

  const { getByText } = render(<ToDoList {...props} />);

  const todoText = getByText(props.items[0].text);
  expect(todoText).toBeDefined();
});
