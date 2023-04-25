import React from 'react';
import DynamicTable from '../../../components/tableComponent/dynamicTable';
import Navbar from '../../../components/navComponents/navbar';

const UserPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col min-h-screen justify-center items-center flex-grow">
        <DynamicTable
          columns={[
            "count",
            "email",
            "id",
            "name",
            "phone"
          ]}
        />
      </div>
    </div>
  );
};

export default UserPage;
