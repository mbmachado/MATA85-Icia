import '@testing-library/jest-dom';

import { screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { AppRoutes } from 'routes/Routes';
import { theme } from 'themes/ic-ufba.theme';

import { render } from '../../test-utils';
import Header from '.';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

test('should render Header', () => {
  render(<Header />);
});
