import * as React from 'react';
import Table, { TableProps } from './Table';
import * as renderer from 'react-test-renderer';

const fakeTableProps: TableProps = {
  columnHeadings: ['Name', 'id', 'data'],
  listItems: [{
    'Name': 'Alex',
    'id': '0',
    'data': 'stud',
  }, {
    'Name': 'Cindy',
    'id': '1',
    'data': 'studdette',
  }],
};

describe('Table', () => {
  describe('render', () => {
    const component = renderer.create(
      <Table {...fakeTableProps}/>
    );
    let tree = component.toJSON();

    it('should render correctly', () => {
      expect(tree).toMatchSnapshot();
    });
  });
});