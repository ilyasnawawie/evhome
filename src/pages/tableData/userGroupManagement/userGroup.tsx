import React from 'react';
import DynamicTable from '../../../../components/tableComponent/dynamicTable';
import Navbar from '../../../../components/navComponents/navbar';

const UserGroupPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col min-h-screen justify-center items-center flex-grow">
        <DynamicTable
          columns={[
            "id",
            "name",
            "email",
            "phone",
            "count",
          ]}
          apiEndpoint="/admin/user-group"
          dataPath="data.user_groups"
        />
      </div>
    </div>
  );
};

export default UserGroupPage;