import clsx from 'clsx';
import { useState } from 'react';

const TestComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white dark:bg-black rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Test Component</h1>
      <p className="text-lg mb-4">Current Count: {count}</p>
      <div className="flex space-x-4">
        <button
          className={clsx(
            'px-4 py-2 rounded-full bg-blue-600 text-white',
            'hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2'
          )}
          onClick={increment}
        >
          Increment
        </button>
        <button
          className={clsx(
            'px-4 py-2 rounded-full bg-red-600 text-white',
            'hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2'
          )}
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default TestComponent;

