import * as React from 'react';
import './App.css';
import DataPage from '../DataPage';
import NavBar from '../NavBar';
import { DataPageProps } from '../DataPage';
import { Pages } from '../../constants';

export interface AppProps {
  customerProps: DataPageProps;
  orderProps: DataPageProps;
  sampleProps: DataPageProps;
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

    const navBarProps = {
      navItems: [
        {
          displayText: 'Test 1',
          onClick: () => { return; },
        },
        {
          displayText: 'Test 2',
          onClick: () => { return; },
        },
      ],
    };

    return (
      <div className="App">
        <h1>Lab Stuff</h1>
        <NavBar {...navBarProps}/>
        {pageContent}
      </div>
    );
  }

  private initialDataFetch() {
    // This is hacky to reach into each props and call the fetch method
    this.props.customerProps.fetchData();
    this.props.orderProps.fetchData();
    this.props.sampleProps.fetchData();
  }
}

export default App;
