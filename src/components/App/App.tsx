import * as React from 'react';
import './App.css';
import CustomersPage from '../CustomersPage';
import { CustomersPageProps } from '../CustomersPage';

export interface AppProps {
  customerProps: CustomersPageProps;
  page: string;
}

class App extends React.Component<AppProps> {
  componentDidMount() {
    this.props.customerProps.fetchCustomers();
  }

  render() {
    let pageContent;

    switch (this.props.page) {
      case 'customers':
        pageContent = <CustomersPage {...this.props.customerProps}/>;
        break;
      case 'orders':
        // pageContent = <OrdersPage {...this.props.orderProps}/>;
        break;
      case 'samples':
        // pageContent = <SamplesPage {...this.props.sampleProps}/>;
        break;
      default:
    }

    return (
      <div className="App">
        <CustomersPage {...this.props.customerProps}/>
      </div>
    );
  }
}

export default App;
