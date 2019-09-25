import * as React from 'react';
import { Provider } from 'react-redux';
// import './App.less';
import Header from './common/header/index';
import Swipers from './common/swiper';
import store from './store';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Swipers />
        </div>
      </Provider>
    );
  }
}

export default App;
