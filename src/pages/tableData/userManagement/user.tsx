import React from 'react';
import { useRouter } from 'next/router';
import DynamicTable from '../../../../components/tableComponent/dynamicTable';
import Navbar from '../../../../components/navcomponents/navbar';
import InputButton from '../../../../components/inputComponents/inputButton';

const UserPage = () => {
  const router = useRouter();

  const handleRfidUsersClick = () => {
    router.push('rfid-users');
  };

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
            "user_group_name"
          ]}
          apiEndpoint="/users"
          dataPath="data.users"
        />
        <InputButton buttonLabel="Go to RFID Users" onClick={handleRfidUsersClick} className="max-w-xs" />
      </div>
    </div>
  );
};

export default UserPage;

