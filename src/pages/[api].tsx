import React from 'react';
import DynamicTable from '../../components/tableComponent/dynamicTable';
import Navbar from '../../components/navcomponents/navbar';

interface TablePageProps {
  api: string;
}

const TablePage: React.FC<TablePageProps> = ({ api }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col min-h-screen justify-center items-center flex-grow">
        <div style={{ width: '100%', overflow: 'auto' }}>
          <DynamicTable
            apiEndpoint={`/${api}`}
            dataPath={`data.${api}`}
          />
        </div>
      </div>
    </div>
  );
};

// This function gets called at build time
export async function getStaticPaths(): Promise<{ paths: { params: { api: string } }[], fallback: boolean }> {
  // Fetch your API endpoints from your back-end here.
  // For simplicity, let's assume you have these APIs:
  const apis = ['users', 'orders', 'products'];
  
  const paths = apis.map(api => ({
    params: { api },
  }))

  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }: { params: { api: string } }) {
  return { props: { api: params.api } }
}

export default TablePage;
