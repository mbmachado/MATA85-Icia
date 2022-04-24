import React from 'react';
import { render as customRender } from 'test-utils';

import Menu from '..';

test('should render Menu properly', () => {
  const { getByText } = customRender(<Menu />);
  getByText('Perguntas');
  getByText('Usuários');
});
