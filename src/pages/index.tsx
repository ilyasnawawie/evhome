import React from 'react';
import Dashboard from '../../components/dashboardComponents/dashboard'
import Navbar from '../../components/navComponents/navbar';

const IndexPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <div>
          <Navbar />
        </div>
        <div className="flex flex-col min-h-screen justify-center items-center flex-grow">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
