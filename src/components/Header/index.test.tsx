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
  const linkElement = screen.getByText(/ICIA/i);
  expect(linkElement).toBeInTheDocument();
});

test('should render Logout button if user is logged', () => {
  render(<Header />);
  const linkElement = document.querySelector('#logout-button');
  expect(linkElement).toBeInTheDocument();
});
