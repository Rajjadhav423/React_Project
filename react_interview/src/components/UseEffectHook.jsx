import React from 'react';

const UseEffectHook = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">useEffect Hook</h1>
      <p className="text-gray-700 mb-4">
        The <span className="font-mono text-blue-600">useEffect</span> hook in React is used to handle side effects in functional components. It allows you to perform actions such as fetching data, updating the DOM, or subscribing to events after the component renders.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Usage</h2>
      <p className="text-gray-700 mb-4">
        The <span className="font-mono text-blue-600">useEffect</span> hook runs after the component renders. You can control when it executes by specifying dependencies.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Example</h2>
      <div className="bg-gray-900 text-gray-200 p-4 rounded-lg overflow-x-auto">
        <pre>
          <code>
            {`
import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [count, setCount] = useState(0);

  // useEffect with no dependencies: Runs on every render
  useEffect(() => {
    console.log('Component rendered');
  });

  // useEffect with an empty dependency array: Runs only once
  useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component unmounted');
    };
  }, []);

  // useEffect with dependencies: Runs when 'count' changes
  useEffect(() => {
    console.log(\`Count changed to: \${count}\`);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Timer;
            `}
          </code>
        </pre>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Common Use Cases</h2>
      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li>Fetching data from an API.</li>
        <li>Adding or removing event listeners.</li>
        <li>Updating the document title or interacting with the DOM.</li>
        <li>Handling subscriptions (e.g., WebSocket or data streams).</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Dependencies</h2>
      <p className="text-gray-700 mb-4">
        The dependency array controls when the <span className="font-mono">useEffect</span> runs:
      </p>
      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li><span className="font-mono">[]</span>: Runs only once when the component mounts.</li>
        <li><span className="font-mono">[dep1, dep2]</span>: Runs whenever <span className="font-mono">dep1</span> or <span className="font-mono">dep2</span> changes.</li>
        <li>No array: Runs after every render.</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Cleanup Function</h2>
      <p className="text-gray-700 mb-4">
        The cleanup function is returned from <span className="font-mono">useEffect</span>. It runs before the effect executes again or when the component unmounts. Useful for cleaning up subscriptions or event listeners.
      </p>

      <div className="bg-gray-900 text-gray-200 p-4 rounded-lg overflow-x-auto">
        <pre>
          <code>
            {`useEffect(() => {
  const timer = setInterval(() => {
    console.log('Timer running');
  }, 1000);

  return () => {
    clearInterval(timer); // Cleanup when component unmounts
  };
}, []);
`}
          </code>
        </pre>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">When to Use</h2>
      <ul className="list-disc ml-6 text-gray-700">
        <li>Whenever a side effect is required, such as fetching data or interacting with the browser API.</li>
        <li>To clean up resources when a component unmounts.</li>
      </ul>
    </div>
  );
};

export default UseEffectHook;
