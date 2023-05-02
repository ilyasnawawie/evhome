import React from 'react';
import DynamicTable from '../../../../components/tableComponent/dynamicTable';
import Navbar from '../../../../components/navComponents/navbar';

const RFIDuserPage = () => {
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
                        "rfid",
                        "user_group_name",
                        "status",
                        "timestamp"
                    ]}
                    apiEndpoint="/admin/user-group-user-rfid"
                    dataPath="data.rfids"
                />

            </div>
        </div>
    );
};

export default RFIDuserPage;
