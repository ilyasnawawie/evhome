import React from 'react';
import { Pagination as MuiPagination } from '@mui/material';
import { styled } from '@mui/system';
import FirstPage from '@mui/icons-material/FirstPage';
import LastPage from '@mui/icons-material/LastPage';

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    onPageChange(value);
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
      >
        <FirstPage />
      </button>
      <StyledPagination
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
        siblingCount={1}
        boundaryCount={1}
        shape="rounded"
      />
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        <LastPage />
      </button>
      <div className="ml-4">
        Page {currentPage} of {totalPages} - {totalItems} entries
      </div>
    </div>
  );
};

const StyledPagination = styled(MuiPagination)`
  & .MuiPaginationItem-root {
    border-radius: 4px;
    margin: 0 4px;
  }

  & .MuiPaginationItem-page.Mui-selected {
    background-color: #f5a962;
  }

  & .MuiPaginationItem-page.Mui-selected:hover {
    background-color: #f5a962;
  }
`;

export default React.memo(Pagination);
