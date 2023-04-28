import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './searchTable';
import Pagination from './paginationTable';
import { useFetchData } from './fetchData';

interface RowData {
  [key: string]: any;
}

interface DynamicTableProps {
  columns: string[];
}

const DynamicTable: React.FC<DynamicTableProps> = ({ columns }) => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, []);

  const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL || '';

  const { data, totalItems, isLoading } = useFetchData({
    adminUrl,
    token,
    query: searchValue,
    page: currentPage,
    pageSize: itemsPerPage,
  });

  const handleSearch = (searchValue: string) => {
    setSearchValue(searchValue);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="bg-white overflow-hidden shadow-md rounded-md">
      <div className="flex items-center justify-end px-6 py-3">
        <SearchBar onSearch={handleSearch} />
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column} className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {row[column] ? row[column] : `No data for ${column}`}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default DynamicTable;
