import * as React from 'react';
import { TableProps } from '../Table';
import Table from '../Table';

export interface OrdersPageProps {
    fetchOrders: () => void;
    tableProps: TableProps;
    isFetching: boolean;
}

const OrdersPage = (props: OrdersPageProps) => {
    return (
        <div className="OrdersPage-Container">
            <h1>Orders</h1>
            <Table {...props.tableProps}  />
            <button onClick={props.fetchOrders}>Fetch Orders</button>
        </div>
    );
};

export default OrdersPage;