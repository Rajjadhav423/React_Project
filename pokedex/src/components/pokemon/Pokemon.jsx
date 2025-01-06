

import {Link} from 'react-router-dom'
const Pokemon = ({ pokemons }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {pokemons.map((pokemon) => (
          <div 
            key={pokemon.id}
            className="group"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              {/* Top Accent Bar */}
              <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
              
              {/* Pokemon Name */}
              <div className="px-4 py-3 bg-gradient-to-r from-gray-50 to-gray-100">
                <h2 className="text-xl font-bold text-gray-800 text-center">
                  {pokemon.name}
                </h2>
              </div>

              {/* Image Container */}
              <div className="p-4 bg-white">
                <div className="relative aspect-square rounded-xl bg-gradient-to-b from-gray-50 to-gray-100 p-4 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <img
                    className="w-full h-full object-contain"
                    src={pokemon.image}
                    alt={pokemon.name}
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 bg-white border-t border-gray-100">
                <Link
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium py-2 px-4 rounded-lg 
                           hover:from-blue-600 hover:to-purple-600 transform hover:translate-y-px
                           focus:ring-2 focus:ring-purple-300 focus:outline-none transition-all duration-200"
                   to={`/pokemon/${pokemon.id}`}        
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Example usagee
export default Pokemon