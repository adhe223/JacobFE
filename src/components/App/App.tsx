import * as React from 'react';
import './App.css';
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
      case Pages.landingPage:
        pageContent = <SearchLanding />;
        break;
      default:
        pageContent = null;
    }

    return (
      <div className="App">
        {pageContent}
      </div>
    );
  }
}

export default App;
