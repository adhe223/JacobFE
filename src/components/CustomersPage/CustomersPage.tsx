import * as React from 'react';
import { TableProps } from '../Table';
import Table from '../Table';

export interface CustomersPageProps {
    fetchCustomers: () => void;
    tableProps: TableProps;
    isFetching: boolean;
}

const CustomersPage = (props: CustomersPageProps) => {
    return (
        <div className="CustomersPage-Container">
            <h1>Customers</h1>
            <Table {...props.tableProps}  />
            <button onClick={props.fetchCustomers}>Fetch Customers</button>
        </div>
    );
};

export default CustomersPage;