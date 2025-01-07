import React, { useRef, useState, useEffect } from 'react';

const UseRefHook = () => {
  const inputRef = useRef(null); // For accessing a DOM element
  const renderCount = useRef(0); // For persisting a value across renders
  const [name, setName] = useState('');

  // Track renders using useRef
  useEffect(() => {
    renderCount.current += 1;
  });

  const focusInput = () => {
    inputRef.current.focus(); // Focus on the input element
  };

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">useRef Hook</h1>
      <p className="text-gray-700 mb-4">
        The <span className="font-mono text-blue-600">useRef</span> hook is primarily used for:
        <ul className="list-disc ml-6 mt-2">
          <li>Accessing and manipulating DOM elements directly.</li>
          <li>Persisting mutable values that do not trigger re-renders.</li>
          <li>Tracking renders or maintaining previous values.</li>
        </ul>
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Example 1: DOM Manipulation</h2>
      <p className="text-gray-700 mb-4">
        In this example, the <span className="font-mono">useRef</span> hook is used to focus on the input field when the button is clicked.
      </p>
      <div className="mb-4">
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter your name"
          className="border rounded-md px-4 py-2 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={focusInput}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600 transition duration-200"
        >
          Focus Input
        </button>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Example 2: Persisting Mutable Values</h2>
      <p className="text-gray-700 mb-4">
        Here, <span className="font-mono">useRef</span> tracks the number of renders without causing re-renders itself.
      </p>
      <div className="mb-4">
        <p className="text-gray-700">
          Render Count: <span className="font-bold">{renderCount.current}</span>
        </p>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Core Concepts</h2>
      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li><strong>DOM Access:</strong> Use <span className="font-mono">useRef</span> to directly reference DOM elements without re-rendering the component.</li>
        <li><strong>Persistent Values:</strong> Store values across renders without causing re-renders (e.g., timers, previous states).</li>
        <li><strong>Initial Value:</strong> The <span className="font-mono">current</span> property of the ref object is mutable and persists across renders.</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Applications of useRef</h2>
      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li>
          <strong>Accessing DOM Elements:</strong> Manage focus, text selection, or other DOM manipulations.
        </li>
        <li>
          <strong>Tracking Previous State:</strong> Store the previous state of a variable for comparisons or calculations.
        </li>
        <li>
          <strong>Avoiding Re-Renders:</strong> Store mutable values like counters or timers that don't need re-rendering.
        </li>
        <li>
          <strong>Custom Hooks:</strong> Build advanced hooks that require mutable references (e.g., managing subscriptions or animations).
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Example Variations</h2>
      <h3 className="text-lg font-semibold text-gray-700 mt-4">1. Tracking Previous Value</h3>
      <pre className="bg-gray-900 text-gray-200 p-4 rounded-lg overflow-x-auto">
        <code>
{`
import React, { useState, useRef, useEffect } from 'react';

const PreviousValueExample = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count; // Update previous value
  });

  return (
    <div>
      <h1>Current: {count}</h1>
      <h2>Previous: {prevCountRef.current}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
`}
        </code>
      </pre>

      <h3 className="text-lg font-semibold text-gray-700 mt-4">2. Timer Example</h3>
      <pre className="bg-gray-900 text-gray-200 p-4 rounded-lg overflow-x-auto">
        <code>
{`
import React, { useRef, useState } from 'react';

const TimerExample = () => {
  const timerRef = useRef(null);
  const [time, setTime] = useState(0);

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => setTime((prev) => prev + 1), 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  return (
    <div>
      <h1>Timer: {time}s</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
};
`}
        </code>
      </pre>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Key Points</h2>
      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li><span className="font-mono">useRef</span> does not cause re-renders when its value is updated.</li>
        <li>The <span className="font-mono">current</span> property persists across renders.</li>
        <li>Commonly used for DOM manipulation, tracking state, and preventing re-renders for certain values.</li>
      </ul>
    </div>
  );
};

export default UseRefHook;
