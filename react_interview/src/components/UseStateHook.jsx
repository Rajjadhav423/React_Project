import React, { useState } from 'react';

const UseStateHook = () => {
  // Example: Using useState to manage a counter
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const reset = () => setCount(0);

  return (
    <div className="p-6 bg-gray-100 text-gray-800">
      <h1 className="text-2xl font-bold mb-4">useState Hook</h1>
      <p className="mb-4">
        The <span className="font-mono text-blue-600">useState</span> hook is a React hook that allows you to manage state in functional components. It is a replacement for the state management functionality previously only available in class components.
      </p>

      <h2 className="text-xl font-semibold mb-2">Core Concepts</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>
          <strong>State Initialization:</strong> The initial state is set by passing a value to <span className="font-mono">useState</span>.
        </li>
        <li>
          <strong>State Updates:</strong> Provides a setter function to update the state.
        </li>
        <li>
          <strong>Component Re-renders:</strong> Triggers a re-render whenever the state is updated.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Example: Counter</h2>
      <div className="mb-4">
        <p className="mb-2">Count: <span className="font-bold">{count}</span></p>
        <button
          onClick={increment}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600 transition duration-200"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="bg-red-500 text-white px-4 py-2 rounded mr-2 hover:bg-red-600 transition duration-200"
        >
          Decrement
        </button>
        <button
          onClick={reset}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-200"
        >
          Reset
        </button>
      </div>

      <h2 className="text-xl font-semibold mb-2">Applications</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Managing form inputs in a functional component.</li>
        <li>Implementing counters, toggles, or any simple state logic.</li>
        <li>Tracking UI states such as modals, dropdowns, or themes.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Example Variations</h2>
      <h3 className="text-lg font-semibold mt-4">1. Managing Complex State</h3>
      <p className="mb-2">You can use an object to manage more complex states:</p>
      <pre className="bg-gray-900 text-gray-200 p-4 rounded-lg overflow-x-auto">
        <code>
{`
const [user, setUser] = useState({
  name: '',
  age: 0,
});

const updateName = (newName) => {
  setUser((prevUser) => ({ ...prevUser, name: newName }));
};

const updateAge = (newAge) => {
  setUser((prevUser) => ({ ...prevUser, age: newAge }));
};
`}
        </code>
      </pre>

      <h3 className="text-lg font-semibold mt-4">2. Functional Updates</h3>
      <p className="mb-2">
        When the new state depends on the previous state, use the functional update form:
      </p>
      <pre className="bg-gray-900 text-gray-200 p-4 rounded-lg overflow-x-auto">
        <code>
{`
const [count, setCount] = useState(0);

const incrementByFive = () => {
  setCount((prevCount) => prevCount + 5);
};
`}
        </code>
      </pre>

      <h2 className="text-xl font-semibold mb-2">Key Points</h2>
      <ul className="list-disc ml-6">
        <li>
          <strong>Initial Value:</strong> The initial value can be a primitive, array, object, or any other data type.
        </li>
        <li>
          <strong>Lazy Initialization:</strong> If the initial state is computationally expensive, pass a function to <span className="font-mono">useState</span> that returns the initial value.
        </li>
        <li>
          <strong>Immutable Updates:</strong> Always create a new state instead of mutating the current state directly.
        </li>
      </ul>
    </div>
  );
};

export default UseStateHook;
