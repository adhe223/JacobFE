import * as React from 'react';
import './App.css';
import DataPage from '../DataPage';
import { DataPageProps } from '../DataPage';
import { Pages } from '../../constants';
import SearchLanding from '../SearchLanding';

export interface AppProps {
  customerProps: DataPageProps;
  orderProps: DataPageProps;
  sampleProps: DataPageProps;
  page: Pages;
}

class App extends React.Component<AppProps> {
  render() {
    let pageContent;
    switch (this.props.page) {
      case Pages.customers:
        pageContent = <DataPage {...this.props.customerProps}/>;
        break;
      case Pages.orders:
        pageContent = <DataPage {...this.props.orderProps}/>;
        break;
      case Pages.samples:
        pageContent = <DataPage {...this.props.sampleProps}/>;
        break;
      default:
    }

    return (
      <div className="App">
        <SearchLanding/>
      </div>
    );
  }
}

export default App;
