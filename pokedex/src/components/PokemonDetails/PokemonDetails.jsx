import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import axios from 'axios';

const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPokemonDetails = async () => {
    try {
      let url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
      const response = await axios.get(url);
      setPokemonDetails(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching Pokémon details:", error);
    }
  };

  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  return (
    <div className="bg-gradient-to-br from-green-200 via-blue-100 to-purple-200 p-6 min-h-screen flex justify-center items-center">
      {isLoading ? (
        <div className="text-center">
          <div className="loader border-t-green-500 border-t-4 border-green-200 rounded-full w-16 h-16 animate-spin mb-4"></div>
          <p className="text-xl font-bold text-gray-700">Loading...</p>
        </div>
      ) : (
        pokemonDetails && (
          <div className="max-w-lg w-full bg-white shadow-lg rounded-xl overflow-hidden">
            {/* Header */}
            <div className="bg-green-500 text-white text-center py-4">
              <h1 className="text-3xl font-bold">
                {pokemonDetails.name.toUpperCase()}
              </h1>
              <p className="text-lg mt-1">
                Base Experience: {pokemonDetails.base_experience}
              </p>
            </div>

            {/* Image */}
            <div className="p-6 bg-gradient-to-b from-gray-50 to-gray-100">
              <img
                src={pokemonDetails.sprites.other.dream_world.front_default}
                alt={pokemonDetails.name}
                className="mx-auto w-40 h-40 object-contain"
              />
            </div>

            {/* Abilities */}
            <div className="px-6 py-4">
              <h2 className="text-xl font-bold text-gray-700 mb-2">
                Abilities:
              </h2>
              <ul className="list-disc list-inside text-gray-600">
                {pokemonDetails.abilities.map((ability, index) => (
                  <li key={index}>
                    <span className="font-medium">{ability.ability.name}</span>{" "}
                    {ability.is_hidden && "(Hidden Ability)"}
                  </li>
                ))}
              </ul>
            </div>

            {/* Game Indices */}
            <div className="px-6 py-4">
              <h2 className="text-xl font-bold text-gray-700 mb-2">
                Game Indices:
              </h2>
              <ul className="list-disc list-inside text-gray-600">
                {pokemonDetails.game_indices.map((game, index) => (
                  <li key={index}>
                    <span className="font-medium">{game.version.name}</span>:
                    Index {game.game_index}
                  </li>
                ))}
              </ul>
            </div>

            {/* Cries */}
            <div className="px-6 py-4">
              <h2 className="text-xl font-bold text-gray-700 mb-2">Cries:</h2>
              <div className="flex justify-between items-center">
                <button
                  onClick={() =>
                    window.open(
                      pokemonDetails.cries.latest,
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                >
                  Latest Cry
                </button>
                <button
                  onClick={() =>
                    window.open(
                      pokemonDetails.cries.legacy,
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Legacy Cry
                </button>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default PokemonDetails;
