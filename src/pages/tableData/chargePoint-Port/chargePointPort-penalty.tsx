import React from 'react';
import DynamicTable from '../../../../components/tableComponent/dynamicTable';
import Navbar from '../../../../components/navComponents/navbar';

const ChargePointPenalties = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex flex-col min-h-screen justify-center items-center flex-grow">
                <DynamicTable
                    columns={[
                        "price",
                        "time",
                    ]}
                    apiEndpoint="/admin/charge-point-port-penalty"
                    dataPath="data.penalties"
                />

            </div>
        </div>
    );
};

export default ChargePointPenalties;
