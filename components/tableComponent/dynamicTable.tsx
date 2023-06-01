import React, { useState, useEffect, useRef } from 'react';
import SearchBar from './searchTable';
import Pagination from './paginationTable';
import Sort from './sortAscDesc';
import { useFetchData } from './fetchData';
import nookies from 'nookies';

interface DynamicTableProps {
  apiEndpoint: string;
  dataPath: string;
  columnRenderers?: { [key: string]: (value: any) => any };
}

const DynamicTable: React.FC<DynamicTableProps> = ({
  apiEndpoint,
  dataPath,
  columnRenderers
}) => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [token, setToken] = useState<string | null>(null);
  const [columns, setColumns] = useState<string[]>([]);
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const tableRef = useRef<HTMLTableElement>(null);
  const [tableWidth, setTableWidth] = useState(0);

  useEffect(() => {
    const cookies = nookies.get(null);
    setToken(cookies.authToken);
  }, []);

  const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL || '';
  const { data, meta, totalItems, isLoading } = useFetchData({
    adminUrl,
    token,
    query: searchValue,
    page: currentPage,
    pageSize: itemsPerPage,
    apiEndpoint,
    dataPath,
    sortColumn,
    sortOrder
  });

  useEffect(() => {
    if (meta && meta.columns) {
      setColumns(meta.columns);
    }
  }, [meta]);

  useEffect(() => {
    if (tableRef.current) {
      setTableWidth(tableRef.current.offsetWidth);
    }
  }, [tableRef.current]);

  const handleSearch = (searchValue: string) => {
    setSearchValue(searchValue);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleSort = (column: string, order: 'asc' | 'desc') => {
    setSortColumn(column);
    setSortOrder(order);
  };

  return (
    <div className="bg-white overflow-hidden shadow-md rounded-md">
        <div className="flex justify-end px-6 py-3">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="table-container overflow-x-auto" style={{maxWidth: '100%'}}>
        <table ref={tableRef} className="table-fixed divide-y divide-gray-200 rounded-lg border border-gray-200">
          <colgroup>
            <col style={{ width: '300px' }} /> {/* Adjust the width as needed */}
            {columns.map((_, index) => (
              <col key={index} style={{ width: '250px' }} />
            ))}
          </colgroup>
          <thead className="bg-gray-50">
            <tr>
              <th></th> {/* Empty th for the left-most column */}
              {columns.map((column) => (
                <th
                  key={column}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {column}
                  <Sort column={column} onSort={handleSort} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {index + 1}
                  </div>
                </td>
                {columns.map((column) => (
                  <td
                    key={column}
                    className="px-6 py-4 whitespace-nowrap"
                  >
                    <div className="text-sm text-gray-900">
                      {columnRenderers && columnRenderers[column]
                        ? columnRenderers[column](row[column])
                        : row[column] || `No data for ${column}`}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
