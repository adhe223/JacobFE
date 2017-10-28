import * as React from 'react';
import { TableProps } from '../Table';
import Table from '../Table';

export interface SamplesPageProps {
    fetchSamples: () => void;
    tableProps: TableProps;
    isFetching: boolean;
}

const SamplesPage = (props: SamplesPageProps) => {
    return (
        <div className="SamplesPage-Container">
            <h3>Samples</h3>
            <Table {...props.tableProps}  />
            <button onClick={props.fetchSamples}>Fetch Samples</button>
        </div>
    );
};

export default SamplesPage;