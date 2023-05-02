import { useState, useEffect } from 'react';
import axios from 'axios';

interface FetchDataOptions {
  adminUrl: string;
  token: string | null;
  query: string;
  page: number;
  pageSize: number;
  apiEndpoint: string;
}


export const useFetchData = ({
  adminUrl,
  token,
  query,
  page,
  pageSize,
  apiEndpoint,
}: FetchDataOptions) => {
  const [data, setData] = useState<any[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!token) return;

    const fetchData = async () => {
      try {
        const headers = {
          token,
          'Content-Type': 'application/json',
        };
        setIsLoading(true);
        const response = await axios.get(
          `${adminUrl}${apiEndpoint}?page=${page}&page_size=${pageSize}&query=${query}`,
          { headers }
        );
        
        if (Array.isArray(response.data.data.user_groups)) {
          setData(response.data.data.user_groups);
          setTotalItems(response.data.meta.total);
        } else {
          setData([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [adminUrl, token, query, page, pageSize]);

  return { data, totalItems, isLoading };
};
