import React from 'react';
import DynamicTable from '../../../../components/tableComponent/dynamicTable';
import Navbar from '../../../../components/navcomponents/navbar';

const UserPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col min-h-screen justify-center items-center flex-grow">
        <div style={{ width: '100%', overflow: 'auto' }}>
          <DynamicTable
            apiEndpoint="/users"
            dataPath="data.users"
          />
        </div>
      </div>
    </div>
  );
};

export default UserPage;
