import React from 'react';
import { render } from 'test-utils';

import ConfirmDialog from '..';

test('should render ConfirmDialog properly', () => {
  const { getByTestId } = render(
    <ConfirmDialog
      props={{ title: 'a', onConfirm: () => {}, setOpen: () => {}, open: true }}
    />,
  );
  const reject = getByTestId('reject-button');
  const confirm = getByTestId('confirm-button');
  expect(reject).toContainHTML('Não');
  expect(confirm).toContainHTML('Sim');
});
