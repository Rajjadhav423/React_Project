import { createContext } from "react"

export const userContext=createContext()

import { useState } from "react";
const Context = ({children}) => {
    const [user, setUser] = useState([
    { id: 0, name: "John Doe", email: "john@example.com", password: "password123" },
    { id: 1, name: "Jane Smith", email: "jane@example.com", password: "password456" },
    { id: 3, name: "Rajesh Jadhav", email: "jadhavrz423@gmail.com", password: "password456" }
  ]);
  console.log(user);
  // console.log(props)
  return (
  <userContext.Provider value={{user,setUser}}>  {children} </userContext.Provider>
  )
}

export default Context
