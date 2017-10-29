import * as React from 'react';
import { TableProps } from '../Table';
import Table from '../Table';

export interface DataPageProps {
    fetchData: () => void;
    tableProps: TableProps;
    isFetching: boolean;
    pageTitle: String;
}

const CustomersPage = (props: DataPageProps) => {
    return (
        <div className="DataPage-Container">
            <h3>{props.pageTitle}</h3>
            <Table {...props.tableProps}  />
            <button onClick={props.fetchData}>Fetch {props.pageTitle}</button>
        </div>
    );
};

export default CustomersPage;