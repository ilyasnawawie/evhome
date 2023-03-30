import React from 'react';
import Dashboard from '../../components/dashboard/dashboard';
import Sidebar from '../../components/sidebarnav/navbar';

const IndexPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <div>
          <Sidebar />
        </div>
        <div className="flex flex-col min-h-screen justify-center items-center flex-grow">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
