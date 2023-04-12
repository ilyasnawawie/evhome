import React, { useState } from 'react';
import SearchBar from './searchTable';
import Pagination from './paginationTable';

interface RowData {
  id: number;
  name: string;
  siteCount: number;
  email: string;
  phoneNumber: string;
}

function createData(id: number, name: string, siteCount: number, email: string, phoneNumber: string): RowData {
  return { id, name, siteCount, email, phoneNumber };
}

const rows: RowData[] = [
  createData(1, 'Ilyas', 3, 'ilyas@example.com', '+60123456789'),
  createData(2, 'Kelvin', 5, 'kelvin@example.com', '+60129876543'),
  createData(3, 'James', 1, 'james@example.com', '+60131234567'),
  createData(4, 'Aziz', 4, 'aziz@example.com', '+60137654321'),
  createData(6, 'Nurul', 2, 'nurul@example.com', '+60135432198'),
  createData(7, 'Ilyas', 3, 'ilyas@example.com', '+60123456789'),
  createData(8, 'Kelvin', 5, 'kelvin@example.com', '+60129876543'),
  createData(9, 'James', 1, 'james@example.com', '+60131234567'),
  createData(10, 'Aziz', 4, 'aziz@example.com', '+60137654321'),
  createData(11, 'Nurul', 2, 'nurul@example.com', '+60135432198'),
  createData(12, 'Nurul', 2, 'nurul@example.com', '+60135432198'),
];

const BasicTable: React.FC = () => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredRows, setFilteredRows] = useState(rows);

  const handleSearch = (searchValue: string) => {
    const lowerCaseSearchValue = searchValue.toLowerCase();
    const filteredData = rows.filter((row) =>
      Object.values(row)
        .join(' ')
        .toLowerCase()
        .includes(lowerCaseSearchValue)
    );
    setFilteredRows(filteredData);
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
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Site Count
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Phone Number
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {paginatedRows.map((row, index) => (
            <tr key={row.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{row.id}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{row.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">
                {row.siteCount}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{row.email}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{row.phoneNumber}</div>
              </td>
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

export default BasicTable;
