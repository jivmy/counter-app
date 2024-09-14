import React, { useState } from 'react';

const Counter: React.FC = () => {
  // Enforce number type for the state
  const [count, setCount] = useState<number>(0);

  // Increment function with explicit event type for the button click
  const increment = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCount(count + 1);
  };

  // Decrement function with explicit event type for the button click
  const decrement = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCount(count - 1);
  };

  // Reset function with explicit event type for the button click
  const reset = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCount(0);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-6">Counter: {count}</h1>
      <div className="space-x-4">
        <button
          onClick={increment}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Decrement
        </button>
        <button
          onClick={reset}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
