import React from 'react';
import { render } from 'react-testing-library';

import AddTodo from './AddTodo';

test('AddTodo should render with props', () => {
  const handleInputChange = jest.fn();
  const handleAddTodo = jest.fn();
  const clearInput = jest.fn();
  const handleEnter = jest.fn();
  const value = '';

  const props = {
    handleInputChange,
    handleAddTodo,
    clearInput,
    handleEnter,
    value
  };

  render(<AddTodo {...props} />);
});
