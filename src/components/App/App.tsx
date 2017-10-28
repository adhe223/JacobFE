import * as React from 'react';
import './App.css';
import CustomersPage from '../CustomersPage';
import OrdersPage from '../OrdersPage';
import SamplesPage from '../SamplesPage';
import { CustomersPageProps } from '../CustomersPage';
import { OrdersPageProps } from '../OrdersPage';
import { SamplesPageProps } from '../SamplesPage';
import { Pages } from '../../constants';

export interface AppProps {
  customerProps: CustomersPageProps;
  orderProps: OrdersPageProps;
  sampleProps: SamplesPageProps;
  page: Pages;
}

class App extends React.Component<AppProps> {
  componentDidMount() {
    this.initialDataFetch();
  }

  render() {
    let pageContent;

    switch (this.props.page) {
      case Pages.customers:
        pageContent = <CustomersPage {...this.props.customerProps}/>;
        break;
      case Pages.orders:
        pageContent = <OrdersPage {...this.props.orderProps}/>;
        break;
      case Pages.samples:
        pageContent = <SamplesPage {...this.props.sampleProps}/>;
        break;
      default:
    }

    return (
      <div className="App">
        <h1>Lab Stuff</h1>
        {pageContent}
      </div>
    );
  }

  private initialDataFetch() {
    this.props.customerProps.fetchCustomers();
    this.props.orderProps.fetchOrders();
    this.props.sampleProps.fetchSamples();
  }
}

export default App;
