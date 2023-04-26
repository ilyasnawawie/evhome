import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';
import { debounce } from 'lodash';
import axios from 'axios';

interface SearchBarProps {
  onSearch: (value: any) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
    if (value === '') {
      debouncedSearch('');
    }
  };

  const handleSearch = () => {
    debouncedSearch(searchValue);
    setIsSearching(true);
  };

  const debouncedSearch = debounce(async (value) => {
    try {
      setIsSearching(true);
      const token = localStorage.getItem('token');
      const response = await axios.get('http://192.168.0.21:22100/admin/user-group', {
        headers: {
          'token': token ? token : '',
        },
        params: {
          query: value,
        },
      });
      onSearch(value);
      setIsSearching(false);
    } catch (error) {
      console.error(error);
      setIsSearching(false);
    }
  }, 500);
  
  
  

  const handleClear = () => {
    setSearchValue('');
    debouncedSearch('');
  };

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
