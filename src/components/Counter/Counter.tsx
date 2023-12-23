import { useState } from 'react';

interface CounterProps {}
const Counter = ({ ...rest }: CounterProps) => {
  const [count, setCount] = useState(0);

  return (
    <div data-testid='counter' onClick={() => setCount((pre) => pre + 1)}>
      {count}
    </div>
  );
};

export default Counter;
