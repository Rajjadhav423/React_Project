import {Routes,Route} from 'react-router-dom'
import PokemonDetails from '../PokemonDetails/PokemonDetails'
import PokemonList from '../PokemonList/PokemonList'
const CustomRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<PokemonList/>}/>
      <Route path='/pokemon/:id' element={<PokemonDetails/>}/>
      </Routes>
    </div>
  )
}

export default CustomRoutes
