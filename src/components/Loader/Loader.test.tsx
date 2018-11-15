import React from 'react';
import { render } from 'react-testing-library';

import Loader from './Loader';

test('Loader should render', () => {
  render(<Loader />);
});
