import { useState, useCallback } from 'react';

const UseCallbackHook = () => {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  // Memoized function using useCallback
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className={`p-6 ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'
      } transition duration-300`}
    >
      <h1 className="text-2xl font-bold mb-4">useCallback Hook</h1>
      <p className="mb-4">
        The <span className="font-mono text-blue-600">useCallback</span> hook is used to memoize callback functions, ensuring that the same instance of the function is reused between renders unless dependencies change.
      </p>

      <h2 className="text-xl font-semibold mb-2">Core Concepts</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>
          <strong>Performance Optimization:</strong> Prevents unnecessary re-creation of functions during re-renders.
        </li>
        <li>
          <strong>Dependency Array:</strong> Recomputes the function only when dependencies change.
        </li>
        <li>
          Works seamlessly with <span className="font-mono">React.memo</span> for optimizing child components.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Example: Increment Counter</h2>
      <p className="mb-4">
        This example demonstrates how <span className="font-mono">useCallback</span> can be used to memoize an increment function, avoiding unnecessary re-renders of child components.
      </p>
      <div className="mb-4">
        <p className="mb-2">Count: {count}</p>
        <button
          onClick={increment}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600 transition duration-200"
        >
          Increment
        </button>
        <button
          onClick={toggleTheme}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-200"
        >
          Toggle Theme
        </button>
      </div>

      <h2 className="text-xl font-semibold mb-2">Applications</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>
          <strong>Optimizing Child Components:</strong> Prevents unnecessary re-renders when passing functions as props to child components.
        </li>
        <li>
          <strong>Event Handlers:</strong> Memoize event handlers to avoid re-creation during every render.
        </li>
        <li>
          <strong>Expensive Computations:</strong> Use in scenarios where recalculating a function is costly.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Example Variations</h2>
      <h3 className="text-lg font-semibold mt-4">1. Passing to Child Component</h3>
      <p className="mb-2">
        Combine <span className="font-mono">useCallback</span> with <span className="font-mono">React.memo</span> to optimize child components:
      </p>
      <pre className="bg-gray-900 text-gray-200 p-4 rounded-lg overflow-x-auto">
        <code>
{`
import React, { useState, useCallback } from 'react';

const Child = React.memo(({ increment }) => {
  console.log('Child rendered');
  return (
    <button onClick={increment} className="bg-blue-500 text-white px-4 py-2 rounded">
      Increment in Child
    </button>
  );
});

const Parent = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <Child increment={increment} />
    </div>
  );
};
`}
        </code>
      </pre>

      <h3 className="text-lg font-semibold mt-4">2. Memoizing Expensive Operations</h3>
      <pre className="bg-gray-900 text-gray-200 p-4 rounded-lg overflow-x-auto">
        <code>
{`
import React, { useCallback, useState } from 'react';

const ExpensiveComponent = ({ compute }) => {
  console.log('ExpensiveComponent rendered');
  return <div>Result: {compute()}</div>;
};

const MemoizedComponent = React.memo(ExpensiveComponent);

const App = () => {
  const [count, setCount] = useState(0);

  const computeExpensiveValue = useCallback(() => {
    console.log('Computing...');
    return count * 2;
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Increment Count</button>
      <MemoizedComponent compute={computeExpensiveValue} />
    </div>
  );
};
`}
        </code>
      </pre>

      <h2 className="text-xl font-semibold mb-2">Key Points</h2>
      <ul className="list-disc ml-6">
        <li>
          <strong>Difference from useMemo:</strong> While <span className="font-mono">useMemo</span> memoizes a computed value, <span className="font-mono">useCallback</span> memoizes a function.
        </li>
        <li>
          Useful when passing functions as props to child components that are wrapped in <span className="font-mono">React.memo</span>.
        </li>
        <li>
          Always specify the dependency array to avoid stale closures.
        </li>
      </ul>
    </div>
  );
};

export default UseCallbackHook;
