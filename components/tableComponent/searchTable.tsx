import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';

interface SearchBarProps {
  onSearch: (value: string, shouldSearch: boolean) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  const handleSearch = () => {
    onSearch(searchValue, true);
  };
  
  const handleClear = () => {
    setSearchValue('');
    onSearch('', true);
  };
  
  const handleBlur = () => {
    if (searchValue === '') {
      onSearch('', true);
    }
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
        onClick={handleSearch}
        disabled={searchValue === ''}
        aria-label="search"
        sx={{ mr: 2 }}
      >
        <SearchIcon />
      </IconButton>
      <IconButton
        edge="end"
        color="inherit"
        onClick={handleClear}
        disabled={searchValue === ''}
        aria-label="clear"
        sx={{ mr: 2 }}
      >
        <ClearIcon />
      </IconButton>
      <TextField
        value={searchValue}
        onChange={handleChange}
        onBlur={handleBlur}
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
