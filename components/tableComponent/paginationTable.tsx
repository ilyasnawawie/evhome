// Pagination.tsx
import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        className="px-4 py-2 mr-2 font-medium text-gray-700 bg-gray-200 rounded-lg focus:outline-none hover:bg-gray-300"
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <button
        className="px-4 py-2 font-medium text-gray-700 bg-gray-200 rounded-lg focus:outline-none hover:bg-gray-300"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
