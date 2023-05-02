import React from 'react';
import DynamicTable from '../../../../components/tableComponent/dynamicTable';
import Navbar from '../../../../components/navComponents/navbar';

const Order = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col min-h-screen justify-center items-center flex-grow">
        <DynamicTable
          columns={[
                "id",
                "user_id",
                "user_name",
                "user_email",
                "charge_point_id",
                "charge_point_name",
                "charge_point_port_id",
                "charge_point_port_name",
                "charge_point_location_id",
                "charge_point_location_name",
                "start_timestamp",
                "end_timestamp",
                "status_id",
                "status_type",
                "start_meter_value",
                "end_meter_value",
                "amount",
                "reason",
          ]}
          apiEndpoint="/admin/order"
          dataPath="data.orders"
        />
      </div>
    </div>
  );
};

export default Order;