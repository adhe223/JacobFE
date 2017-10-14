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
  columnHeadings: string[];
  listItems: TableRow[];
}

const Table = (props: TableProps) => {
  const headings = props.columnHeadings.map((heading, indx) => {
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
      <tr>
        {headings}
      </tr>
      {rows}
    </table>
  );
};

export default Table;