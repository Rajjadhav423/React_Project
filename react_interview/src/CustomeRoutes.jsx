import {Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import UseStateHook from './components/UseStateHook'
import UseMemoHook from './components/UseMemoHook'
import UseEffectHook from './components/UseEffectHook'
import UseCallbackHook from './components/UseCallbackHook'
import UseRefHook from './components/UseRefHook'
import UseContextHook from './components/UseContextHook'

function CustomRoutes(){
return (
    <Routes>
        <Route path='/' element={<NavBar/>}/>
        <Route path='/useState' element={<UseStateHook/>}/>
        <Route path='/useEffect' element={<UseEffectHook />}/>
        <Route path='/useContext' element={<UseContextHook />} />
        <Route path='/useMemo' element={<UseMemoHook/>} />
        <Route path='/useRef' element={<UseRefHook />} />
        <Route path='/useCallback' element={<UseCallbackHook />} />
    </Routes>
)
}

export default CustomRoutes