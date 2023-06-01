import React, { useState } from 'react';

interface SortProps {
  column: string;
  onSort: (column: string, order: 'asc' | 'desc') => void;
}

const Sort: React.FC<SortProps> = ({ column, onSort }) => {
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');

  const handleSort = () => {
    const newOrder = order === 'asc' ? 'desc' : 'asc';
    console.log('Sort handleSort', column, newOrder);
    onSort(column, newOrder);
    setOrder(newOrder);
  };

  return (
    <button onClick={handleSort}>
      {order === 'asc' ? '▲' : '▼'}
    </button>
  );
};

export default Sort;
