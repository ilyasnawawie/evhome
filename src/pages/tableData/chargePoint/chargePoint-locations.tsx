import React from 'react';
import DynamicTable from '../../../../components/tableComponent/dynamicTable';
import Navbar from '../../../../components/navComponents/navbar';

const chargePointLocation = () => {
    const columnRenderers = {
        is_private: (value: boolean) => value ? 'Private' : 'Public',
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex flex-col min-h-screen justify-center items-center flex-grow">
                <DynamicTable
                    columns={[
                        "id",
                        "name",
                        "is_private",
                        "address",
                        "count"
                    ]}
                    apiEndpoint="/admin/charge-point-location"
                    dataPath="data.charge_point_locations"
                    columnRenderers={columnRenderers}
                />
            </div>
        </div>
    );
};

export default chargePointLocation;
