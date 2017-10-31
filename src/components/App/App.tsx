import * as React from 'react';
import './App.css';
import DataPage from '../DataPage';
import NavBar from '../NavBar';
import { DataPageProps } from '../DataPage';
import { Page } from '../../constants';

export interface AppProps {
  customerData: DataPageProps;
  orderData: DataPageProps;
  sampleData: DataPageProps;
  setPage: (page: Page) => void;
  page: Page;
}

class App extends React.Component<AppProps> {
  componentDidMount() {
    this.initialDataFetch();
  }

  render() {
    let pageContent;
    const navItems = [
      'Home',
      'Customers',
      'Orders',
      'Samples',
    ];

    switch (this.props.page) {
      case Page.customers:
        pageContent = <DataPage {...this.props.customerData} pageTitle="Customers" />;
        break;
      case Page.orders:
        pageContent = <DataPage {...this.props.orderData} pageTitle="Orders" />;
        break;
      case Page.samples:
        pageContent = <DataPage {...this.props.sampleData} pageTitle="Samples" />;
        break;
      default:
    }

    return (
      <div className="App">
        <h1>Lab Stuff</h1>
        <NavBar navItems={navItems} setPage={this.props.setPage}/>
        {pageContent}
      </div>
    );
  }

  private initialDataFetch() {
    // This is hacky to reach into each props and call the fetch method
    this.props.customerData.fetchData();
    this.props.orderData.fetchData();
    this.props.sampleData.fetchData();
  }
}

export default App;
