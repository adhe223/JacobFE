import * as React from 'react';

// TableRow looks like
// {
//   'Name': 'Alex',
//   'id': '1',
//   'data': 'science',
//    ...: ...,
// }
export interface TableRow {
  [key: string]: string;
}

export interface TableProps {
  listItems: TableRow[];
}

const Table = (props: TableProps) => {
  if (props.listItems.length === 0) {
    return null;
  }

  const headings = Object.keys(props.listItems[0]).map((heading, indx) => {
    return <th key={'th-' + indx}>{heading}</th>;
  });

  const rows = props.listItems.map((row, rowIndx) => {
    let cells: JSX.Element[] = [];

    Object.keys(row).forEach((heading, cellIndx) => {
      cells.push(
        <td key={'td-' + cellIndx}>{row[heading]}</td>
      );
    });

    return <tr key={'tr-' + rowIndx}>{cells}</tr>;
  });

  return (
    <table>
      <thead>
        <tr>
          {headings}
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
};

export default Table;