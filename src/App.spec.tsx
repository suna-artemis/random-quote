import { cleanup, render, screen } from '@testing-library/react';

import App from './App';

afterEach(cleanup);

it('render', () => {
  render(<App />);
  const linkElement = screen.getByText(/Player.count:/i);
  expect(linkElement).toBeInTheDocument();
});
