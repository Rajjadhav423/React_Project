
import  { useState } from 'react';

const Search = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="flex justify-center mb-6">
      <input
        type="text"
        value={searchValue}
        onChange={handleSearch}
        placeholder="Search Pokémon..."
        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>
  );
};

export default Search;
