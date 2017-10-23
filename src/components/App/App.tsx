import * as React from 'react';
import './App.css';
import Table from '../Table/Table';

const logo = require('../../logo.svg');

export interface AppProps {
  fetchCustomers: () => {};
}

class App extends React.Component<AppProps> {
  handleClick() {
    // TODO
    this.props.fetchCustomers();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Table listItems={tableProps} />
        <button onClick={this.handleClick}>
          Fetch Customers
        </button>
      </div>
    );
  }
}

export default App;
