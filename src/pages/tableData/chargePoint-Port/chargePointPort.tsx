import React from 'react';
import { useRouter } from 'next/router';
import DynamicTable from '../../../../components/tableComponent/dynamicTable';
import Navbar from '../../../../components/navComponents/navbar';
import InputButton from '../../../../components/inputComponents/inputButton';

const ChargePointPort = () => {
  const router = useRouter();

  const handleChargePenalty = () => {
    router.push('chargePointPort-penalty');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col min-h-screen justify-center items-center flex-grow">
        <DynamicTable
          columns={[
            "id",
            "name",
            "electricity_type",
            "type",
            "power",
            "voltage",
            "price",
            "latest_status"
          ]}
          apiEndpoint="/admin/charge-point-port"
          dataPath="data.charge_point_ports"
        />
        <InputButton buttonLabel="Go to Charge Point Port Penalty" onClick={handleChargePenalty} className="max-w-xs" />
      </div>
    </div>
  );
};

export default ChargePointPort;
