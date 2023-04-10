import React from 'react';
import BasicTable from '../../../components/tableComponent/dynamicTable'; 
import Navbar from '../../../components/navComponents/navbar';

const userPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <div>
          <Navbar />
        </div>
        <div className="flex flex-col min-h-screen justify-center items-center flex-grow">
          <BasicTable/>
        </div>
      </div>
    </div>
  );
};

export default userPage;

