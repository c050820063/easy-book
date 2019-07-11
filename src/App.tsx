import * as React from 'react';
import { Provider } from 'react-redux';
// import './App.less';
import Header from './common/header/index';
import store from './store';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
        </div>
      </Provider>
    );
  }
}

export default App;
