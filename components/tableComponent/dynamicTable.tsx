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
  const [searchValue, setSearchValue] = useState('');
  const [filteredRows, setFilteredRows] = useState<RowData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  interface UserGroupRow {
    id: number;
    name: string;
    email: string;
    phone: string;
    count: number;
  }

  const [totalItems, setTotalItems] = useState(0);

  const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL || '';

  const fetchData = async (query: string, page: number, pageSize: number) => {
    try {
      const token = localStorage.getItem('token');
      const headers = {
        'token': token ? token : '',
        'Content-Type': 'application/json',
      };
      setIsLoading(true);
      const response = await axios.get(`${adminUrl}/admin/user-group?page=${page}&page_size=${pageSize}&query=${query}`, { headers: headers });

      if (Array.isArray(response.data.data.user_groups)) {
        let formattedRows = response.data.data.user_groups.map((row: UserGroupRow) => {
          return {
            id: row.id,
            name: row.name,
            email: row.email,
            phone: row.phone,
            count: row.count,
          };
        });

        setFilteredRows(formattedRows);
        setTotalItems(response.data.meta.total);
      } else {
        setFilteredRows([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (searchValue === '') {
      fetchData('', currentPage, itemsPerPage);
    } else {
      fetchData(searchValue, currentPage, itemsPerPage);
    }
  }, [searchValue, currentPage]);

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
          {filteredRows.map((row, index) => (
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