
import Pokemon from "../pokemon/Pokemon";
import Search from "../search/Search";
import usePokemonList from "../Hooks/usePokemonList";

const PokemonList = () => {

  const {pokemonListState, setPokemonListState}=usePokemonList()
  const handleSearch = (query) => {
    setPokemonListState((prevState) => ({
      ...prevState,
      filteredPokemons: query
        ? prevState.pokemonList.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(query.toLowerCase())
          )
        : prevState.pokemonList,
    }));
  };

  const { filteredPokemons, isLoading, nextUrl, prevUrl } = pokemonListState;

  return (
    <div className="bg-gradient-to-br from-purple-200 via-blue-100 to-pink-200 p-6 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
        Pokémon List
      </h1>

      <Search onSearch={handleSearch} />

      {isLoading ? (
        <div className="flex justify-center items-center min-h-[50vh]">
          <div className="loader border-t-blue-500 border-t-4 border-blue-200 rounded-full w-16 h-16 animate-spin"></div>
        </div>
      ) : (
        <Pokemon pokemons={filteredPokemons} />
      )}

      <div className="flex justify-between items-center mt-8">
        <button
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:scale-105 transform transition duration-200"
          disabled={!prevUrl}
          onClick={() =>
            setPokemonListState((prevState) => ({ ...prevState, url: prevUrl }))
          }
        >
          Previous
        </button>
        <button
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:scale-105 transform transition duration-200"
          disabled={!nextUrl}
          onClick={() =>
            setPokemonListState((prevState) => ({ ...prevState, url: nextUrl }))
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PokemonList;
