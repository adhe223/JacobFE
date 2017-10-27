import * as React from 'react';
import './App.css';
import CustomersPage from '../CustomersPage';

export interface AppProps {}

class App extends React.Component<AppProps> {
  render() {
    return (
      <div className="App">
        <CustomersPage />
      </div>
    );
  }
}

export default App;
