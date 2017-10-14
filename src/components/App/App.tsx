import * as React from 'react';
import './App.css';
import Table from '../Table/Table';

const logo = require('../../logo.svg');

class App extends React.Component {
  render() {
    const tableProps = [
      {
        'Name': 'Alex',
        'id': '1',
        'data': 'science',
      }, {
        'Name': 'Alex',
        'id': '1',
        'data': 'science',
      }
    ];

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Table listItems={tableProps} />
      </div>
    );
  }
}

export default App;
