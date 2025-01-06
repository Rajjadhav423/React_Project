import Search from "../search/Search"
import './Pokedex.css'
const Pokedex = () => {
    return (
      <div className="poke">
        <h1>Pokedex</h1>
        <p>Find your favorite Pokémon by name!</p>
        <Search />
      </div>
    );
  };

export default Pokedex