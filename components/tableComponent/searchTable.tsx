import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';
import { debounce } from 'lodash';

interface SearchBarProps {
  onSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');
  const [inputWidth, setInputWidth] = useState('100%');
  const [isSearching, setIsSearching] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
    if (value === '') {
      debouncedSearch('');
    }
  };

  const handleSearch = () => {
    setInputWidth('100%');
    debouncedSearch(searchValue);
    setIsSearching(true);
  };

  const debouncedSearch = debounce((value) => {
    onSearch(value);
    setIsSearching(false);
  }, 500);

  const handleClear = () => {
    setSearchValue('');
    debouncedClear();
  };

  const debouncedClear = debounce(() => {
    setIsSearching(false);
    onSearch('');
  }, 500);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center justify-start">
      <IconButton
        edge="end"
        color="inherit"
        onClick={searchValue === '' ? undefined : handleSearch}
        disabled={searchValue === '' || isSearching}
        aria-label="search"
        sx={{ mr: 2 }}
      >
        <SearchIcon />
      </IconButton>
      <IconButton
        edge="end"
        color="inherit"
        onClick={handleClear}
        disabled={searchValue === '' || isSearching}
        aria-label="clear"
        sx={{ mr: 2 }}
      >
        <ClearIcon />
      </IconButton>
      <TextField
        value={searchValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        label="Search"
        variant="outlined"
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
            },
            '&:hover fieldset': {
              borderColor: 'gray',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'orange',
            },
          },
          '& .MuiInputLabel-root': {
            color: 'orange',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'orange',
          },
        }}
      />
    </div>
  );
};

export default SearchBar;
