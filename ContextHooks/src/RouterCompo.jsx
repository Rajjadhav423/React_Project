import { Routes,Route } from "react-router-dom"
import Home from "./components/Home"
import User from "./components/User"
import About from "./components/About.jsx"
import UserDetails from './components/UserDetails.jsx'
const RouterCompo = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path="/user/:id" element={<UserDetails/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default RouterCompo
