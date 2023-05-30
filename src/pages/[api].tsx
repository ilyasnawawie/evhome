import React from 'react';
import DynamicTable from '../../components/tableComponent/dynamicTable';
import Navbar from '../../components/navcomponents/navbar';
import { GetServerSidePropsContext, NextPage } from 'next';
import nookies from 'nookies';
import { withAuth } from '../../services/checkSession';

interface DynamicPagesProps {
    api: string;
}

const DynamicPages: NextPage<DynamicPagesProps> = ({ api }) => {
    const tableWidth = 1000;
  
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex flex-col min-h-screen justify-center items-center flex-grow">
          <div style={{ maxWidth: `${tableWidth}px`, overflow: 'auto' }}>
            <DynamicTable
              apiEndpoint={`/${api}/`}
              dataPath={`data`}
            />
          </div>
        </div>
      </div>
    );
  };

export async function getServerSideProps(context: GetServerSidePropsContext<{ api: string }>) {
    const cookies = nookies.get(context);
    const token = cookies.authToken;

    if (!token) {
        return {
            redirect: {
                destination: 'auth/login',
                permanent: false,
            },
        };
    }

    const api = context.params?.api;

    if (!api) {
        return {
            notFound: true,
        };
    }

    return { props: { api } };
}

export default withAuth(DynamicPages);
