import React from 'react';
import { render } from 'react-testing-library';

import Header from './Header';

test('Header should render', () => {
  render(<Header />);
});
