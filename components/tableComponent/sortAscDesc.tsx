import React, { useState, useEffect } from 'react';

interface SortProps {
  column: string;
  currentSortColumn: string | null;
  onSort: (column: string, order: 'asc' | 'desc') => void;
}

const Sort: React.FC<SortProps> = ({ column, currentSortColumn, onSort }) => {
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    if (currentSortColumn !== column) {
      setOrder('asc');
      setShowIcon(false);
    }
  }, [currentSortColumn]);

  const handleSort = () => {
    const newOrder = order === 'asc' ? 'desc' : 'asc';
    onSort(column, newOrder);
    setOrder(newOrder);
    setShowIcon(true);
  };

  return (
    <div className="flex items-center">
      <span 
        className="cursor-pointer hover:bg-yellow-200 inline-block py-1 px-2 rounded" 
        onClick={handleSort}
      >
        {column}
      </span>
      {showIcon && (
        <span className="ml-2">
          {order === 'asc' ? '▲' : '▼'}
        </span>
      )}
    </div>
  );
};

export default Sort;
