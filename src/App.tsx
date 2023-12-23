import { useState } from 'react';
import { Player } from './Player';

interface AppProps {}

const App = ({}: AppProps) => {
  const player = new Player();

  const [rerenderCount, setRerenderCount] = useState(0);

  return (
    <div
      className={`w-screen h-screen text-green-300 border-red-400 bg-gray-700`}></div>
  );
};

export default App;
