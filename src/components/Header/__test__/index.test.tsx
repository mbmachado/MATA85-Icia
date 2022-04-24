import React from 'react';
import { render } from 'test-utils';

import Header from '..';

test('should render Header properly', () => {
  const { getByTestId } = render(<Header />);
  const logo = getByTestId('logo');
  expect(logo).toHaveAttribute('alt', 'logo');
  expect(logo).toHaveAttribute('src', 'logo-icia-horizontal-text-white.svg');
});
