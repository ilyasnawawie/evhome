import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './searchTable';
import Pagination from './paginationTable';

interface RowData {
  [key: string]: any;
}

interface DynamicTableProps {
  columns: string[];
}

const DynamicTable: React.FC<DynamicTableProps> = ({ columns }) => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredRows, setFilteredRows] = useState<RowData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (query: string, page: number, pageSize: number) => {
    setIsLoading(true);
    try {
      const response = await axios.post('https://api.evhome.solutions:22100/user-management', {
        query,
        page,
        pageSize,
      });

      setFilteredRows(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData('', currentPage, itemsPerPage);
  }, [currentPage]);

  const handleSearch = (searchValue: string) => {
    setCurrentPage(1);
    fetchData(searchValue, 1, itemsPerPage);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const paginatedRows = filteredRows.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

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
          {paginatedRows.map((row, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column} className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{row[column]}</div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalItems={filteredRows.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default DynamicTable;
