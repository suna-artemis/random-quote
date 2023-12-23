import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';

afterEach(cleanup);

it('click counter to increment', () => {
  const { getByTestId } = render(<Counter />);
  const counter = getByTestId('counter');
  fireEvent.click(counter);
  expect(counter).toHaveTextContent('1');
  fireEvent.click(counter);
  expect(counter).toHaveTextContent('2');
});
