import * as React from 'react';
import './App.css';
import CustomersPage from '../CustomersPage';
import { CustomersPageProps } from '../CustomersPage';

export interface AppProps {
  customerProps: CustomersPageProps;
}

class App extends React.Component<AppProps> {
  render() {
    return (
      <div className="App">
        <CustomersPage {...this.props.customerProps}/>
      </div>
    );
  }
}

export default App;
