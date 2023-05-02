import React from 'react';
import { useRouter } from 'next/router';
import DynamicTable from '../../../../components/tableComponent/dynamicTable';
import Navbar from '../../../../components/navComponents/navbar';
import InputButton from '../../../../components/inputComponents/inputButton';

const ChargePoint = () => {
  const router = useRouter();

  const handleChargeLocations = () => {
    router.push('chargePoint-locations');
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
          apiEndpoint="/admin/charge-point"
          dataPath="data.charge_points"
        />
        <InputButton buttonLabel="Go to Charge Locations" onClick={handleChargeLocations} className="max-w-xs" />
      </div>
    </div>
  );
};

export default ChargePoint;

