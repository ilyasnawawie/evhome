import React from 'react';
import DynamicTable from '../../../components/tableComponent/dynamicTable';
import Navbar from '../../../components/navComponents/navbar';

const userPage = () => {
  const token = typeof window !== 'undefined' && window.localStorage.getItem('token');
  console.log('Token:', token);

  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <div>
          <Navbar />
        </div>
        <div className="flex flex-col min-h-screen justify-center items-center flex-grow">
          <DynamicTable
            columns={[
              "id",
              "name",
              "email",
              "phone",
              "user_group_name",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default userPage;
