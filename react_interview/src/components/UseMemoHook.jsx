import React, { useState, useMemo } from 'react';

const UseMemoHook = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  // Example of useMemo to optimize a computation
  const expensiveCalculation = useMemo(() => {
    console.log('Performing expensive calculation...');
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += 1;
    }
    return result + count;
  }, [count]);

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">useMemo Hook</h1>
      <p className="text-gray-700 mb-4">
        The <span className="font-mono text-blue-600">useMemo</span> hook is used to optimize performance by memoizing the result of an expensive computation. It recalculates the result only when its dependencies change.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Example</h2>
      <div className="bg-gray-900 text-gray-200 p-4 rounded-lg overflow-x-auto">
        <pre>
          <code>
            {`
import React, { useState, useMemo } from 'react';

const Example = () => {
  const [count, setCount] = useState(0);

  const expensiveCalculation = useMemo(() => {
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += 1;
    }
    return result + count;
  }, [count]);

  return (
    <div>
      <h1>Expensive Calculation: {expensiveCalculation}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
            `}
          </code>
        </pre>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">When to Use</h2>
      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li>For expensive computations that depend on specific variables.</li>
        <li>To avoid unnecessary recalculations in functional components.</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Key Points</h2>
      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li><span className="font-mono">useMemo</span> only recomputes when its dependencies change.</li>
        <li>It helps to improve performance by avoiding redundant calculations.</li>
        <li>Use it wisely, as overusing <span className="font-mono">useMemo</span> can lead to unnecessary complexity.</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Performance Note</h2>
      <p className="text-gray-700 mb-4">
        While <span className="font-mono">useMemo</span> can optimize performance, it doesn't guarantee a performance boost. Avoid using it for simple calculations as the overhead of using the hook might outweigh its benefits.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Example Output</h2>
      <p className="text-gray-700 mb-4">
        Try clicking the "Increment" button to see how the expensive calculation is only performed when the <span className="font-mono">count</span> value changes.
      </p>

      <div className="mt-6">
        <h2 className="text-lg font-bold text-gray-800">Interactive Demo:</h2>
        <h3 className="text-gray-700 my-2">Expensive Calculation Result: {expensiveCalculation}</h3>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
          onClick={() => setCount(count + 1)}
        >
          Increment Count
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded ml-4 hover:bg-green-600 transition duration-200"
          onClick={() => setShow(!show)}
        >
          Toggle Visibility
        </button>
        {show && <p className="mt-4 text-gray-700">The component is visible.</p>}
      </div>
    </div>
  );
};

export default UseMemoHook;
