import React, { useState, useEffect } from 'react';

interface SortProps {
  column: string;
  currentSortColumn: string | null;
  onSort: (column: string, order: 'asc' | 'desc') => void;
}

const Sort: React.FC<SortProps> = ({ column, currentSortColumn, onSort }) => {
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    if (currentSortColumn !== column) {
      setOrder('asc');
    }
  }, [currentSortColumn]);

  const handleSort = () => {
    const newOrder = order === 'asc' ? 'desc' : 'asc';
    onSort(column, newOrder);
    setOrder(newOrder);
  };

  return (
    <button onClick={handleSort}>
      {column === currentSortColumn ? '' : (order === 'asc' ? '▲' : '▼')}
    </button>
  );
};

export default Sort;
