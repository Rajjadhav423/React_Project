import React from 'react'

const UseContextHook = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">useContext Hook</h1>
      <p className="text-gray-700 mb-4">
        The <span className="font-mono text-blue-600">useContext</span> hook in React is a way to access the value of a context object directly without the need to use a consumer component or the <span className="font-mono">Context.Consumer</span>. It simplifies state sharing between components in the component tree.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Usage</h2>
      <p className="text-gray-700 mb-4">
        The <span className="font-mono text-blue-600">useContext</span> hook is typically used when you have a context created using <span className="font-mono">React.createContext()</span> and you want to access the shared state in functional components.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Example</h2>
      <div className="bg-gray-900 text-gray-200 p-4 rounded-lg overflow-x-auto">
        <pre>
          <code>
            {`
import React, { createContext, useContext } from 'react';

// Create a context
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const user = { name: "Rajesh", role: "Developer" };
  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

const DisplayUser = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <h2>User Name: {user.name}</h2>
      <h3>User Role: {user.role}</h3>
    </div>
  );
};

const App = () => {
  return (
    <UserProvider>
      <DisplayUser />
    </UserProvider>
  );
};

export default App;
            `}
          </code>
        </pre>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Advantages</h2>
      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li>Simplifies state management for components deeply nested in the component tree.</li>
        <li>Eliminates the need for prop drilling to pass data through multiple levels.</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">When to Use</h2>
      <p className="text-gray-700 mb-4">
        Use the <span className="font-mono text-blue-600">useContext</span> hook when:
      </p>
      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li>You have global state or shared data that multiple components need access to.</li>
        <li>You want to avoid prop drilling in a complex component tree.</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Limitations</h2>
      <ul className="list-disc ml-6 text-gray-700">
        <li>Re-renders all components consuming the context when the context value changes.</li>
        <li>May not be the best choice for highly dynamic or large-scale state management (consider alternatives like Redux or Zustand).</li>
      </ul>
    </div>
  );
};

export default UseContextHook;
