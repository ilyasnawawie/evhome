import React from 'react';
import HeaderMain from '../../components/header/headerMain';
import Dashboard from '../../components/dashboard/dashboard';
import Sidebar from '../../components/sidebarnav/sidebarNav';

const IndexPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderMain />
      <div className="flex flex-grow">
        <Sidebar header="My App" />
        <div className="flex flex-col justify-center items-center flex-grow">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
