import axios from "axios";
import { useState,useEffect } from "react";

const usePokemonList= ()=>{
const [pokemonListState, setPokemonListState] = useState({
    pokemonList: [],
    filteredPokemons: [],
    isLoading: true,
    url: "https://pokeapi.co/api/v2/pokemon",
    nextUrl: "",
    prevUrl: "",
  });
  const downloadData = async () => {
    try {
      const res = await axios.get(pokemonListState.url);
      const pokemonResults = res.data.results;

      // Fetch individual Pokémon data
      const PokeMonResulPromise = pokemonResults.map((pokemon) =>
        axios.get(pokemon.url)
      );
      const pokemonData = await axios.all(PokeMonResulPromise);

      const fetchedPokemons = pokemonData.map((pokeData) => {
        const pokemon = pokeData.data;
        return {
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon.sprites.other.dream_world.front_default,
          types: pokemon.types,
        };
      });

      // Update state with fetched data
      setPokemonListState((prevState) => ({
        ...prevState,
        pokemonList: fetchedPokemons,
        filteredPokemons: fetchedPokemons,
        isLoading: false,
        nextUrl: res.data.next,
        prevUrl: res.data.previous,
      }));
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    }
  };

  useEffect(() => {
    downloadData();
  }, [pokemonListState.url]);

  return {pokemonListState, setPokemonListState}
}

export default usePokemonList