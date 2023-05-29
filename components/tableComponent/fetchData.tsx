import { useState, useEffect } from 'react';
import axios from 'axios';

interface FetchDataOptions {
  adminUrl: string;
  token: string | null;
  query: string;
  page: number;
  pageSize: number;
  apiEndpoint: string;
  dataPath: string;
}

export const useFetchData = ({
  adminUrl,
  token,
  query,
  page,
  pageSize,
  apiEndpoint,
  dataPath,
}: FetchDataOptions) => {
  const [data, setData] = useState<any[]>([]);
  const [meta, setMeta] = useState<any>(null);
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

        const dataArray = dataPath.split('.').reduce((acc, key) => acc && acc[key], response.data);
        if (Array.isArray(dataArray)) {
          setData(dataArray);
          setMeta(response.data.meta); // Set meta directly from response.data
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

  // Return meta as well
  return { data, totalItems: meta ? meta.total : 0, isLoading, meta };

};
