import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="relative w-1/3">
      <input
        type="text"
        className="w-full h-10 px-3 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:ring-2 focus:ring-orange-200 hover:ring-1 hover:ring-orange-200 focus:outline-none"
        placeholder="Search"
        value={searchValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
