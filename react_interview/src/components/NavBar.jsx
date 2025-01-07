import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4 m-8">
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-900 text-white">
              <th className="border border-gray-700 px-4 py-2">Feature</th>
              <th className="border border-gray-700 px-4 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-700">
              <td className="border border-gray-700 px-4 py-2">
                <Link to="/" className="text-yellow-400 hover:underline">
                  Home
                </Link>
              </td>
              <td className="border border-gray-700 px-4 py-2 text-gray-300">
                Navigate to the homepage.
              </td>
            </tr>
            <tr className="hover:bg-gray-700">
              <td className="border border-gray-700 px-4 py-2">
                <Link to="/useState" className="text-yellow-400 hover:underline">
                  Explore useState
                </Link>
              </td>
              <td className="border border-gray-700 px-4 py-2 text-gray-300">
                Learn about managing state using the useState hook.
              </td>
            </tr>
            <tr className="hover:bg-gray-700">
              <td className="border border-gray-700 px-4 py-2">
                <Link to="/useEffect" className="text-yellow-400 hover:underline">
                  Explore useEffect
                </Link>
              </td>
              <td className="border border-gray-700 px-4 py-2 text-gray-300">
                Understand side effects using the useEffect hook.
              </td>
            </tr>
            <tr className="hover:bg-gray-700">
              <td className="border border-gray-700 px-4 py-2">
                <Link to="/useContext" className="text-yellow-400 hover:underline">
                  Explore useContext
                </Link>
              </td>
              <td className="border border-gray-700 px-4 py-2 text-gray-300">
                Share data across components with useContext.
              </td>
            </tr>
            <tr className="hover:bg-gray-700">
              <td className="border border-gray-700 px-4 py-2">
                <Link to="/useMemo" className="text-yellow-400 hover:underline">
                  Explore useMemo
                </Link>
              </td>
              <td className="border border-gray-700 px-4 py-2 text-gray-300">
                Optimize performance using useMemo.
              </td>
            </tr>
            <tr className="hover:bg-gray-700">
              <td className="border border-gray-700 px-4 py-2">
                <Link to="/useRef" className="text-yellow-400 hover:underline">
                  Explore useRef
                </Link>
              </td>
              <td className="border border-gray-700 px-4 py-2 text-gray-300">
                Work with refs and DOM manipulation using useRef.
              </td>
            </tr>
            <tr className="hover:bg-gray-700">
              <td className="border border-gray-700 px-4 py-2">
                <Link to="/useCallback" className="text-yellow-400 hover:underline">
                  Explore useCallback
                </Link>
              </td>
              <td className="border border-gray-700 px-4 py-2 text-gray-300">
                Improve callback performance using useCallback.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </nav>
  )
}

export default NavBar
