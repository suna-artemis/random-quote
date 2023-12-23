import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import Button from './Button';
import { useState } from 'react';

afterEach(cleanup);

it('render normal button', () => {
  const { getByTestId } = render(<Button theme={'primary'}>{'noah'}</Button>);
  expect(getByTestId('button')).not.toBeDisabled();
});

it('render disabled btn', () => {
  const { getByTestId } = render(<Button theme='primary' disabled={true} />);
  expect(getByTestId('button')).toBeDisabled();
});

const ButtonContainer = () => {
  const [label, setLabel] = useState('default');
  return (
    <div
      data-testid='btn-container'
      onClick={() => {
        setLabel((pre) => pre + pre);
      }}>
      <Button>{label}</Button>
    </div>
  );
};

it('render dynamic button label', () => {
  const { container, getByTestId } = render(<ButtonContainer />);

  console.log(getByTestId('button').textContent);
  expect(getByTestId('button').textContent).toEqual('default');

  fireEvent.click(getByTestId('btn-container'));

  console.log(getByTestId('button').textContent);
  expect(getByTestId('button').textContent).toMatch(/defaultdefault/);
});
